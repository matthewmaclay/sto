import React, { useState, useEffect } from 'react'
import Section from 'components/Section'
import { LogoLinks } from 'components/Menu'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
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
const containerRef = React.createRef()
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

  const mapFeatures = address.reduce(
    (acc, item) => [
      ...acc,
      {
        type: 'Feature',
        id: item.id,
        geometry: {
          type: 'Point',
          coordinates: [],
        },
        properties: {
          hintContent: item.title,
          balloonContent: item.description,
        },
        options: {
          opacity: 0.2,
          strokeWidth: 2,
          fillColor: '#00FF00',
        },
      },
    ],
    []
  )
  return (
    <Section titlePage={props.titlePage}>
      <SWrapper>
        <SMapWrapper ref={containerRef}>
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
        </SMapWrapper>
        <SContactsWrapper>
          {!props.titlePage && (
            <Heading className="mb60" type="h3">
              Как добраться
            </Heading>
          )}
          <LogoLinks big withIcons></LogoLinks>
        </SContactsWrapper>
      </SWrapper>
    </Section>
  )
}

export default Contacts
const features = [
  {
    type: 'Feature',
    id: 'id1',
    geometry: {
      type: 'Point',
      coordinates: [59.907613, 30.276261],
    },
    properties: {
      hintContent: 'Главный офис',
      balloonContent:
        'Главный офис: Россия, Санкт-Петербург, Старо-Петергофский проспект, 20к3 лит. А',
    },
    options: {
      opacity: 0.2,
      strokeWidth: 2,
      fillColor: '#00FF00',
    },
  },
  {
    type: 'Feature',
    id: 'id3',
    geometry: {
      type: 'Point',
      coordinates: [59.839014, 30.310173],
    },
    properties: {
      hintContent: 'Автопарк №2',
      balloonContent: 'Автопарк №2: 5-й Предпортовый проезд 3Б',
    },
  },
]
