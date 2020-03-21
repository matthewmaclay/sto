import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const SWrapper = styled.div`
  cursor: pointer;
  height: 30px;
  border-bottom: 3px solid white;
  &:not(:last-child) {
    margin-right: 60px;
  }
  ${({ active, theme }) => active && `border-color: ${theme.colors.orange}`}
`

export default function Tab({
  children,
  id,
  title,
  setServiceType,
  serviceType: activeType,
  ...props
}) {
  const onClick = React.useCallback(() => {
    setServiceType(id)

    localStorage && localStorage.setItem('serviceCategory', title)
  }, [activeType])

  const active = id === activeType
  return (
    <SWrapper active={active} onClick={onClick} {...props}>
      {title}
    </SWrapper>
  )
}
