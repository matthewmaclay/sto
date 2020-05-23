import Section from 'components/Section'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Key from 'icons/whyKey'
import Map from 'icons/whyMap'

import Mechanic from 'icons/mechanic-working'
import HandHolding from 'icons/hand-holding-up-a-wrench'

import Card from './Card'

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
export default function Why() {
  return (
    <Section>
      <Heading center type="h2">
        Нам нужны
      </Heading>
      <SWrapper>
        <Card icon={<Mechanic />} title="Слесарь по ремонту автомобилей " />
        <Card icon={<HandHolding />} title="Мастер-приемщик" />
      </SWrapper>
    </Section>
  )
}
