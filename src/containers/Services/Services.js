import Section from 'components/Section'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import Button from 'components/Button'
import { useStaticQuery, graphql } from 'gatsby'

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
  const {
    allContentfulService: { edges: services },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulService(filter: { often: { eq: true } }, limit: 8) {
          edges {
            node {
              id
              img {
                file {
                  url
                }
              }
              slug
              passenger
              offroad
              description {
                description
              }
              bus
              title
              type {
                id
              }
            }
          }
        }
      }
    `
  )
  return (
    <Section black>
      <Heading white center type="h2">
        Ознакомьтесь с ценами в нашем автосервисе
      </Heading>
      <SWrapper>
        <SGrid>
          {services.map((item, index) => (
            <Item
              to={`/services/${item.node.slug}/?from=main`}
              key={item.node.id}
              title={item.node.title}
            />
          ))}
        </SGrid>
        <SWrapperButton>
          <Button center link style="white" to="/services?from=main">
            Все услуги
          </Button>
        </SWrapperButton>
      </SWrapper>
    </Section>
  )
}
