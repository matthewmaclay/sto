import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export default function Button({
  children,
  to,
  link,
  tag = 'div',
  style = 'gradient',
  ...props
}) {
  const SWrapper = styled[tag]`
  cursor: pointer;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 32px;
  border-style: solid;
  color: white;
  ${
    style === 'gradient'
      ? 'background: linear-gradient(90deg, #F17E01 0%, #CC2515 100%);'
      : 'border-width: 2px;'
  }

  ${style === 'white' && 'border-color: white;'}
  ${style === 'black' && 'border-color: black; color: black;'}

`
  const Component = () =>
    children ? (
      <SWrapper {...props}>{children}</SWrapper>
    ) : (
      <SWrapper {...props} />
    )
  if (link)
    return (
      <Link to={to} activeClassName="active">
        <Component />
      </Link>
    )
  return <Component />
}
