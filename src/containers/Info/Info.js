import Section from 'components/Section'
import styled from '@emotion/styled'
import Text from 'components/Text'

import React from 'react'
import { Link } from 'gatsby'

const SWrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
`

export default function Info(props) {
  return (
    <Section titlePage={props.titlePage}>
      <SWrapper>
        <Text className="mb20" type="24">
          Вы можете приехать к нам в любой день в любое время или &nbsp;
          <Link className="accent" to="/online">
            записаться на ремонт онлайн.
          </Link>
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
