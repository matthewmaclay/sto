import React from 'react'
import styled from '@emotion/styled'

const height = '50px'

const SWrapper = styled.div`
  width: 1px;
  height: ${height};
  position: absolute;
  right: 0;
  left: 0;
  bottom: 53px;
  margin: auto;
  z-index: 5;
  overflow: hidden;
`

const SItem = styled.div`
  @keyframes scroll {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(100px);
    }
  }
  width: 1px;
  background: white;
  height: ${height};
  animation-name: scroll;
  animation-iteration-count: infinite;
  animation-duration: 3s;
`

export default function Scroll() {
  return (
    <SWrapper>
      <SItem />
    </SWrapper>
  )
}
