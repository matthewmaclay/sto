import React from 'react'
import styled from '@emotion/styled'

import Text from 'components/Text'
import { separateNumbers } from 'utils/common'
import { Link } from 'gatsby'

const STitleWrapper = styled(Link)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${props => props.theme.colors.orange};
    transform: scale(1.02);
    padding: 10px 0;
  }
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
  .name {
    padding-right: 50px;
  }
  b {
    width: 150px;
    font-weight: bold;
    white-space: nowrap;
  }
  .cost {
    position: relative;
  }
  .cost:before {
    content: attr(data-stars);
    position: absolute;
    right: -17px;
    font-size: 13px;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const Item = ({ title, cost, slug, img, index, stars, description }) => (
  <div
    itemprop="itemListElement"
    itemscope="true"
    itemtype="http://schema.org/Product"
  >
    <STitleWrapper itemprop="url" to={`/services/${slug}/`}>
      <SContent>
        {img && (
          <span
            className="hidden"
            alt="Photo of product"
            itemprop="image"
            content={img}
          />
        )}
        <span className="name" itemprop="name">
          {title}
        </span>
        <span itemprop="description" content={description}></span>
        <div
          itemscope="true"
          itemprop="offers"
          itemType="http://schema.org/Offer"
        >
          <span
            className="hidden"
            itemprop="priceCurrency"
            content="RUB"
          ></span>
          <span itemprop="price" content={cost || 0}></span>
          <span className="cost" data-zalupa="zalupa" data-stars={stars || ''}>
            {<b>{separateNumbers(cost)}</b>}
          </span>
        </div>
      </SContent>
    </STitleWrapper>
  </div>
)

export default Item
