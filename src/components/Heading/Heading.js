import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'

export default function Section({ children, type, className, center }) {
  const SWrapper = styled[type]`
    ${center && '  text-align: center;'}

    font-weight: bold;
    ${props => props.theme.headings[type].o};
    ${media.s} {
      ${props => props.theme.headings[type].s};
    }
  `
  return <SWrapper className={className}>{children}</SWrapper>
}
