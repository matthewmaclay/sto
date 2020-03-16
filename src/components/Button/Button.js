import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'
import { Link } from 'gatsby'

const SWrapper = styled.div`
  padding: 20px 40px;
  display: inline-block;
  margin: auto;
  border-radius: 32px;
  color: white;
  ${props =>
    props.type === 'gradient'
      ? 'background: linear-gradient(90deg, #F17E01 0%, #CC2515 100%);'
      : 'border-width: 1px;'}

  ${props => props.type === 'white' && 'border-color: white;'}
  ${props => props.type === 'black' && 'border-color: black; color: black;'}

`

export default function Button({
  children,
  to,
  link,
  tag = 'div',
  style = 'gradient',
  ...props
}) {
  const SWrapper = styled[tag]`
  padding: 20px 40px;
  display: inline-block;
  margin: auto;
  border-radius: 32px;
  color: white;
  ${
    style === 'gradient'
      ? 'background: linear-gradient(90deg, #F17E01 0%, #CC2515 100%);'
      : 'border-width: 1px;'
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
