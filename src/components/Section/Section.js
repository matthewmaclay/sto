import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'

const SWrapper = styled.div`
  padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.o};
  ${media.s} {
    padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.s};
  }
  ${media.m} {
    padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.m};
  }
`
export default function Section({ children, withoutPadding }) {
  return <SWrapper withoutPadding={withoutPadding}>{children}</SWrapper>
}
