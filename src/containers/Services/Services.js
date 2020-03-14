import Section from 'components/Section'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Button from 'components/Button'

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  ${media.s} {
    margin-top: 90px;
  }
  ${media.m} {
    flex-direction: row;
  }
`
export default function Services() {
  return (
    <Section black>
      <Heading white center type="h2">
        Ознакомьтесь с ценами в нашем автосервисе
      </Heading>
      <SWrapper>
        <Button link type="gradient" to="/price">
          Цены
        </Button>
      </SWrapper>
    </Section>
  )
}
