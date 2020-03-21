import Section from 'components/Section'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Button from 'components/Button'

import Item from './Item'

const SWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  ${media.s} {
    margin-top: 90px;
  }
`

const SWrapperButton = styled.div`
  display: flex;
  justify-content: center;
`
const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 30px;
  margin-bottom: 80px;
  ${media.l} {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`
export default function Services() {
  return (
    <Section black>
      <Heading white center type="h2">
        Ознакомьтесь с ценами в нашем автосервисе
      </Heading>
      <SWrapper>
        <SGrid>
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
          <Item title="Услуга" />
        </SGrid>
        <SWrapperButton>
          <Button center link style="white" to="/services">
            Все услуги
          </Button>
        </SWrapperButton>
      </SWrapper>
    </Section>
  )
}
