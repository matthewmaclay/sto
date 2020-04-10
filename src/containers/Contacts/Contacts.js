import React, { useState, useEffect } from 'react'
import Section from 'components/Section'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import { useStaticQuery, graphql } from 'gatsby'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.m} {
    flex-direction: row;
  }
`
const SMapWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const SContactsWrapper = styled.div`
  flex: 1;
  margin-top: 50px;
  ${media.s} {
    margin-top: 0;
    margin-left: 50px;
    padding-top: 50px;
  }
`
const mapRef = React.createRef()
const Contacts = props => {
  const {
    contentfulMainPage: { address },
  } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          address {
            id
            coordinates {
              lat
              lon
            }
            description
            title
          }
        }
      }
    `
  )
  const [isLoaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    if (props.lazy) {
      setTimeout(() => setLoaded(true), 3000)
    } else {
      setLoaded(true)
    }
  })
  return (
    <Section titlePage={props.titlePage}>
      <SWrapper>
        <SMapWrapper>
          {isLoaded && (
            <YMaps>
              <Map
                width="100%"
                height="400px"
                defaultState={{ center: [59.922792, 30.312237], zoom: 12 }}
              >
                {address.map(item => (
                  <Placemark
                    key={item.id}
                    geometry={[item.coordinates.lat, item.coordinates.lon]}
                  />
                ))}
              </Map>
            </YMaps>
          )}
        </SMapWrapper>
        <SContactsWrapper>
          {!props.titlePage && (
            <Heading className="mb60" type="h3">
              Как добраться
            </Heading>
          )}
          <Menu.LogoLinks big withIcons></Menu.LogoLinks>
        </SContactsWrapper>
      </SWrapper>
    </Section>
  )
}

export default Contacts
