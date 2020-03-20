import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import media from 'utils/media'
import Text from 'components/Text'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Wrapper = styled(AnchorLink)`
  width: 190px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background: ${({ active, activeBg, bg }) => (active ? activeBg : bg)};
  ${({ activeType, type }) =>
    activeType && activeType !== type
      ? `
    opacity: 0.5;
    `
      : ''}
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
  position: relative;

  &:before {
    content: ${({ active }) => active && "' '"};
    position: absolute;
    width: 30px;
    height: 30px;
    right: 16px;
    top: -15px;
    border-radius: 50%;
    box-sizing: border-box;

    /* Main orange */
    background: white;
    border: 8px solid ${({ theme }) => theme.colors.orange};
  }
` // children, bg, activeBg, type, activeType
const CarCard = props => {
  const { type, activeType, setCarType } = props
  const onClick = React.useCallback(() => {
    if (activeType !== type) {
      setCarType(type)
    } else {
      setCarType(false)
    }
  }, [type, activeType])
  const active = type === activeType

  return (
    <Wrapper href="#tabs" onClick={onClick} active={active} {...props}>
      {props.icon}
      <Text className="mt30" style={{ lineHeight: '18px' }} type="16">
        {props.children}
      </Text>
    </Wrapper>
  )
}

export default CarCard
