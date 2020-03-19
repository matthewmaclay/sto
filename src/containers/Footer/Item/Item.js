import Section from 'components/Section'
import styled from '@emotion/styled'
import Text from 'components/Text'
import { Link } from 'gatsby'

import React from 'react'

const SWrapper = styled.div`
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: ${props => props.theme.colors.orange};
    }
  }
`

export default function Footer({ to, children }) {
  return (
    <SWrapper>
      <Text type="14">
        <Link to={`#`}>{children}</Link>
      </Text>
    </SWrapper>
  )
}
