import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export default function Button({
  children,
  link,
  tag = 'div',
  style = 'gradient',
  center,

  ...props
}) {
  const SWrapper = styled(link ? Link : tag)`
  cursor: pointer;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 32px;

  color: white;
  ${
    style === 'gradient'
      ? 'background: linear-gradient(90deg, #F17E01 0%, #CC2515 100%);'
      : 'border-width: 2px;  border-style: solid;'
  }

  ${center && 'text-align: center;'}
  ${style === 'white' && 'border-color: white;'}
  ${style === 'black' && 'border-color: black; color: black;'}
  transition: transform 300ms ease-in-out;
  text-decoration: none;
  &:hover{
    transform: scale(1.05);
  }

`
  const Component = () =>
    children ? (
      <SWrapper {...props}>{children}</SWrapper>
    ) : (
      <SWrapper {...props} />
    )

  return <Component />
}
