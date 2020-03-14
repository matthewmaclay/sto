import Section from 'components/Section'
import styled from '@emotion/styled'
import Text from 'components/Text'

import React from 'react'

const SWrapper = styled.div`
  max-width: 640px;
  margin: auto;
`

export default function Info() {
  return (
    <Section>
      <SWrapper>
        <Text className="mb20" type="24">
          Вы можете приехать к нам в любой день в любое время или записаться на
          ремонт онлайн.
        </Text>
        <Text type="24">
          {' '}
          У нас можно оставить автомобиль или ждать окончания ТО в уютном зале с
          телевизором за чашечкой чая или кофе
        </Text>
      </SWrapper>
    </Section>
  )
}
