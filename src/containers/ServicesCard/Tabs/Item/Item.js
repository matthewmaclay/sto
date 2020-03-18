import React from 'react'
import styled from '@emotion/styled'

import Text from 'components/Text'

const STitleWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`

const SContent = styled.div`
  margin: auto;
  max-width: 600px;
  width: 100%;
  display: flex;
  padding: 20px 0;
  span {
    flex-grow: 1;
  }
  b {
    width: 150px;
    font-weight: bold;
  }
`

const HeaderText = ({ title, cost }) => (
  <STitleWrapper>
    <SContent>
      <span>{title}</span>
      <b>{cost} руб.</b>
    </SContent>
  </STitleWrapper>
)

export default HeaderText
