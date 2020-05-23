import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Text from 'components/Text'
import Arrow from 'icons/arrow'
import { Link } from 'gatsby'

const SWrapper = styled(Link)`
  height: 100%;
  min-width: 300px;

  max-width: 400px;
  position: relative;
  cursor: pointer;
  background: ${props => props.theme.colors.dark80};
  transition: background 300ms ease-in-out;
  box-shadow: 4px 20px 96px rgba(0, 27, 109, 0.1);
  border-radius: 12px;
  padding: 32px 24px;
  margin: auto;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  ${({ highlight }) =>
    highlight &&
    `
    &:before {
    content: ' ';
    position: absolute;
    width: 150px;
    height: 30px;
    background:linear-gradient(95deg, #CC2515 10.98%, #F17E01 89.02%);
    top: 0;
    left: -55px;
    transform: rotate(-35deg);
  }
  `}

  @media screen and (min-width: 564px) {
    margin: 0;
    min-width: 250px;
  }

  ${media.m} {
    flex-direction: row;
  }
  @keyframes hover1 {
    50% {
      transform: translateX(15px);
    }
    100% {
      transform: translateX(0);
    }
  }

  svg {
    position: absolute;
    right: 24px;
    bottom: 24px;
    transition: fill 300ms ease-in-out;
    fill: ${props => props.theme.colors.orange};
  }

  &:hover {
    background: ${props => props.theme.colors.orange};

    svg {
      animation: hover1 1s ease-in-out infinite;
      fill: white;
    }
  }
`

export default function Item({ title, to, highlight }) {
  return (
    <SWrapper highlight={highlight} to={to}>
      <Text opacity type="20">
        {title}
      </Text>
      <Arrow />
    </SWrapper>
  )
}
