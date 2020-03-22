import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const SLoader = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;

  &:after {
    position: relative;
    top: -15px;
    left: 5px;
    content: ' ';
    display: block;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite, appear-ring 1.2s linear;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes appear-ring {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

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
  ${props.isLoading && 'padding-right: 60px;'}
  ${style === 'white' && 'border-color: white;'}
  ${style === 'black' && 'border-color: black; color: black;'}
  transition: transform 300ms ease-in-out,padding 1s ease-in-out;
  text-decoration: none;
  &:hover{
    transform: scale(1.05);
  }

`

  return (
    <SWrapper {...props}>
      {children}
      {props.isLoading && <SLoader />}
    </SWrapper>
  )
}
