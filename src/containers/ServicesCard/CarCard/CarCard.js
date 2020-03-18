import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import media from 'utils/media'
import Text from 'components/Text'
import Scroll from 'components/Scroll'

const Wrapper = styled.div`
  width: 190px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${props => props.bg && `background:${props.bg};`}
  &:not(:last-child) {
    margin-bottom: 20px;
    ${media.s} {
      margin-right: 18px;
      margin-bottom: 0px;
    }
    ${media.m} {
      margin-right: 30px;
    }
  }
`
const CarCard = props => (
  <Wrapper bg={props.background}>
    {props.icon}
    <Text className="mt30" style={{ lineHeight: '18px' }} type="16">
      {props.children}
    </Text>
  </Wrapper>
)

export default CarCard
