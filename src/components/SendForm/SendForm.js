import React from 'react'
import styled from '@emotion/styled'
import InputMask from 'react-input-mask'
import Button from 'components/Button'
import { Link } from 'gatsby'

const SWrapper = styled.form`
  input[type='tel'] {
    color: white;
    width: 100%;
    background: ${props => props.theme.colors.dark80};
    padding: 16px 20px 16px 20px;
    max-width: 418px;
  }
`

export default function SendForm({ children, to, link, ...props }) {
  return (
    <SWrapper {...props}>
      <InputMask mask="+7(999) 999 99-99" value={props.value}>
        {inputProps => (
          <input
            {...inputProps}
            type="tel"
            name="tel"
            className="mb25"
            placeholder="+7(999) 999 99-99"
            pattern="+7([0-9]{3}) [0-9]{2}-[0-9]{2}"
          />
        )}
      </InputMask>

      <Button tag="input" type="submit" value="Отправить" />
    </SWrapper>
  )
}
