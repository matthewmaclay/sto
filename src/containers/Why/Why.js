import Section from 'components/Section'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Key from 'icons/whyKey'
import Map from 'icons/whyMap'
import Tasks from 'icons/whyTasks'

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
        Почему выбирают нас
      </Heading>
      <SWrapper>
        <Card
          icon={<Map />}
          title="Удобное расположение"
          description="Мы находимся недалеко от такого то места, и этот текст кратко описал в 2 строки"
        />
        <Card
          icon={<Key />}
          title="Качество и профессионализм"
          description="У нас отличная команда, которая любит свое дело и относится к делу со всей серьезностью"
        />
        <Card
          icon={<Tasks />}
          title="Четкое согласование цены и сроков выполнения работы"
          description="Менеджеры тщательно планируют работы"
        />
      </SWrapper>
    </Section>
  )
}
