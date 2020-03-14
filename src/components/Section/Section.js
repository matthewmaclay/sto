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
  background: ${props => (props.black ? props.theme.colors.dark100 : 'white')};
`
export default function Section({ children, ...props }) {
  return <SWrapper {...props}>{children}</SWrapper>
}
