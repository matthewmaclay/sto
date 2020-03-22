import React from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask'
import Button from 'components/Button'
import { Collapse } from 'react-collapse'
import { Link } from 'gatsby'
import { getLocalStorage } from 'utils/common'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const SWrapper = styled.form`
  ${props =>
    props.center &&
    'display: flex; flex-direction: column; align-items: center;'}
  input[type='tel'] {
    color: ${props => (props.white ? 'black' : 'white')};
    width: 100%;
    background: ${props =>
      props.white ? '#222D3E10' : props.theme.colors.dark80};
    padding: 16px 20px 16px 20px;
    max-width: 418px;
  }
  & > .ReactCollapse--collapse {
    transition: height 300ms;
    margin-bottom: 10px;
  }
  span {
  }
`

const inputRef = React.createRef()
export default function SendForm({ children, to, link, ...props }) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [validationError, setValidationError] = React.useState(false)

  const checkValidation = value => {
    const result = value.match(/\+7\(\d{3}\)\s[0-9]{3}\s[0-9]{2}-[0-9]{2}/)

    if (result) {
      return result
    } else {
      setValidationError(
        'Проверьте номер, который вы ввели, в нем возможно ошибка'
      )
      return null
    }
  }
  const submit = e => {
    e.preventDefault()
    const value = inputRef.current.value
    if (!checkValidation(value)) return null
    const data = {
      serviceCategory: getLocalStorage('serviceCategory'),
      carType: getLocalStorage('carType'),
      serviceTitle: getLocalStorage('serviceTitle'),
      phone: value,
    }

    setLoading(true)

    fetch('https://taxispb-bot.herokuapp.com/sto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(r => {
        if (r.status !== 200) {
          throw new Error('Ответ сервера отличается от 200')
        }
      })
      .then(() => {
        trackCustomEvent({
          category: 'request',
          action: 'success',
        })
        setSuccess(true)
      })
      .catch(() => {
        trackCustomEvent({
          category: 'request',
          action: 'failed',
        })
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <SWrapper action="/action_page.php" method="post" {...props}>
      <InputMask
        inputRef={inputRef}
        onChange={e => console.log(e)}
        maskChar=" "
        mask="+7(999) 999 99-99"
        value={props.value}
        onFocus={() => setValidationError(false)}
        onInput={() => {
          const input = inputRef.current
          if (input.value.charAt(3) === '7' || input.value.charAt(3) === '8') {
            input.value = '+7('
          }
        }}
      >
        {inputProps => (
          <input
            {...inputProps}
            ref={inputRef}
            type="tel"
            name="tel"
            className="mb25"
            placeholder="+7(999) 999 99-99"
          />
        )}
      </InputMask>
      <Collapse isOpened={error || validationError}>
        <span>{error || validationError}</span>
      </Collapse>
      <Collapse isOpened={success}>
        <span>Форма отправлена успешно, мы с вами свяжемся. Спасибо!</span>
      </Collapse>
      <Collapse isOpened={!success}>
        <Button isLoading={loading} onClick={submit}>
          {props.buttonValue || 'Отправить'}
        </Button>
      </Collapse>
    </SWrapper>
  )
}
