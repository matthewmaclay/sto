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
`
const SHeading = styled(Heading)`
  margin-bottom: 20px;
`
const SText = styled(Text)`
  text-align: center;
`
const SImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
  ${media.m} {
    width: 240px;
    height: 240px;
  }
`
export default function Card({ icon, title, description }) {
  return (
    <SWrapper>
      {icon}
      <SHeading center type="h4">
        {title}
      </SHeading>
      <SText type="14">{description}</SText>
    </SWrapper>
  )
}
