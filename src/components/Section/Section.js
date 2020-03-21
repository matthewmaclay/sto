import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'
import Heading from 'components/Heading'

const SWrapper = styled.section`
  padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.o};
  ${media.s} {
    padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.s};
  }
  ${media.m} {
    padding: ${props => !props.withoutPadding && props.theme.sectionPaddings.m};
  }
  background: ${props => (props.black ? props.theme.colors.dark100 : 'white')};
  ${props => props.black && 'color: white;'}

  position: relative;
  ${props =>
    props.titlePage &&
    'padding-top: 240px !important; padding-bottom: 100px !important;'}
  h1 {
    text-align: center;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
  }
`
export default function Section({ children, titleAttrs, ...props }) {
  return (
    <SWrapper {...props}>
      {props.titlePage && (
        <Heading {...titleAttrs} type="h1">
          {props.titlePage}
        </Heading>
      )}
      {children}
    </SWrapper>
  )
}
