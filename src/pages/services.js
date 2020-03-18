import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import styled from '@emotion/styled'

import SEO from 'components/SEO'
import Section from 'components/Section'
import ServicesCard from 'containers/ServicesCard'

const SHeader = styled.div`
  color: white;
  text-align: center;
`

const Contact = ({}) => {
  return (
    <Layout>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      ></SEO>
      <Section black>
        <SHeader>
          <Heading className="mb20" white center type="h2">
            Почему выбирают нас
          </Heading>
          <Text center className="mb40" type="24">
            Ознакомьтесь с ценами на услуги и отправьте заявку.
            <br /> Наши менеджеры оперативно свяжутся с вами для уточнения
            деталей.
          </Text>
        </SHeader>
      </Section>
      <Section withoutPadding>
        <ServicesCard />
      </Section>
    </Layout>
  )
}

export default Contact
