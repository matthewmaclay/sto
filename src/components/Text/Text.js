import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'

export default function Section({
  children,
  type,
  className,
  opacity,
  tag = 'div',
}) {
  const SWrapper = styled[tag]`
    text-align: inherit;
    font-family: 'Ubuntu';
    ${props => props.theme.texts[type].o};
    ${props => props.theme.texts[type].o};
    ${opacity && 'opacity: 0.68;'}
    ${media.s} {
      ${props => props.theme.texts[type].s};
    }
  `
  return <SWrapper className={className}>{children}</SWrapper>
}
