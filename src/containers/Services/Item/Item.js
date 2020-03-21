import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Text from 'components/Text'
import Arrow from 'icons/arrow'
import { Link } from 'gatsby'

const SWrapper = styled.div`
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
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background: ${props => props.theme.colors.orange};

    svg {
      animation: hover1 1s ease-in-out infinite;
      fill: white;
    }
  }
`

export default function Item({ title, to }) {
  return (
    <SWrapper>
      <Text opacity type="20">
        <Link to={to}> {title}</Link>
      </Text>
      <Arrow />
    </SWrapper>
  )
}
