import React from 'react'
import styled from '@emotion/styled'
import SendForm from 'components/SendForm'

import Text from 'components/Text'

const STitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
`

const Form = props => (
  <STitleWrapper>
    <Text play className="mb30" center type="24">
      Оставьте быструю заявку, чтобы мы&nbsp;могли связаться <br /> с&nbsp;вами
      для уточнения всех деталей
    </Text>
    <SendForm center white buttonValue="Отправить заявку" />
  </STitleWrapper>
)

export default Form
