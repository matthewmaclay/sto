import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'

export default function Section({
  children,
  type,
  className,
  opacity,
  bold,
  tag = 'div',
  ...props
}) {
  const SWrapper = styled[tag]`
    text-align: inherit;
    font-family: 'Ubuntu';
    ${props => props.theme.texts[type].o};
    ${props => props.theme.texts[type].o};
    ${opacity && 'opacity: 0.68;'}
    ${bold && 'font-weight: bold;'}
    ${media.s} {
      ${props => props.theme.texts[type].s};
    }
  `
  return (
    <SWrapper {...props} className={className}>
      {children}
    </SWrapper>
  )
}
