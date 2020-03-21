import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import media from 'utils/media'
import { separateNumbers, setParam } from 'utils/common'

import Text from 'components/Text'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Wrapper = styled(AnchorLink)`
  width: 306px;
  height: 96px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  background: ${({ active, activeBg, bg }) => (active ? activeBg : bg)};
  position: relative;
  font-weight: bold;
  svg {
    transform: scale(0.5);
    margin-right: 15px;
    margin-left: 15px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  position: relative;
`
/* eslint-disable react/no-unknown-property, no-console */

const CarCard = ({ withSchema, ...props }) => {
  return (
    <Wrapper {...props}>
      {props.icon}

      <Text bold type="24">
        <span itemprop="price" content={props.price}>
          {separateNumbers(props.price, true)}
        </span>
        <span itemprop="priceCurrency" content="RUB">
          &nbsp;руб.
        </span>
      </Text>
    </Wrapper>
  )
}

export default CarCard
