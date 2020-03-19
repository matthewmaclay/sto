import Section from 'components/Section'
import styled from '@emotion/styled'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SendForm from 'components/SendForm'
import media from 'utils/media'

import React from 'react'

const SWrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${media.m} {
    text-align: inherit;
    flex-direction: row;
    .first {
      padding-right: 145px;
    }
  }
`

export default function Appointment({ titlePage }) {
  return (
    <Section titlePage={titlePage} black>
      <SWrapper>
        <div className="first">
          <Heading white type="h2">
            Записаться <span className="accent">просто</span>
          </Heading>
          <Text className="mb40" type="24">
            По номеру телефона
          </Text>
          <Text opacity type="16">
            Наш сотрудник свяжется с вами в течение 5 минут после отправки,
            чтобы уточнить детали вопроса.
          </Text>
        </div>

        <SendForm className="mt20" />
      </SWrapper>
    </Section>
  )
}
