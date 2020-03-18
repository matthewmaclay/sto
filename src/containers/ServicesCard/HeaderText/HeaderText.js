import React from 'react'
import styled from '@emotion/styled'

import Text from 'components/Text'

const STitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`

const HeaderText = props => (
  <STitleWrapper className="mb20">
    <Text className="mb10" bold type="28">
      Я хочу узнать цены для моего автомобиля
    </Text>
    <Text opacity type="14">
      Выберите тип автомобиля
    </Text>
  </STitleWrapper>
)

export default HeaderText
