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
  b {
    width: 150px;
    font-weight: bold;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const Item = ({ title, cost, slug, img, index }) => (
  <div
    itemprop="itemListElement"
    itemscope="true"
    itemtype="http://schema.org/Product"
  >
    <STitleWrapper itemprop="url" to={`/services/${slug}/`}>
      <SContent>
        {img && (
          <img
            className="hidden"
            alt="Photo of product"
            itemprop="image"
            src={img}
          />
        )}
        <span itemprop="name">{title}</span>

        <div
          itemscope="true"
          itemprop="offers"
          itemType="http://schema.org/Offer"
        >
          <span itemprop="price" content={cost}>
            {<b>{separateNumbers(cost)}</b>}
          </span>
        </div>
      </SContent>
    </STitleWrapper>
  </div>
)

export default Item
