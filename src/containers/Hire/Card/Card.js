import React from 'react'
import styled from '@emotion/styled'
import Heading from 'components/Heading'
import media from 'utils/media'
import Text from 'components/Text'

const SWrapper = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  ${media.m} {
    margin-bottom: 0;
    margin: 0 50px;
  }
  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    fill: ${({ theme }) => theme.colors.orange};
  }
`
const SHeading = styled(Heading)`
  margin-bottom: 20px;
`

export default function Card({ icon, title, description }) {
  return (
    <SWrapper>
      {icon}
      <SHeading center type="h3">
        {title}
      </SHeading>
    </SWrapper>
  )
}
