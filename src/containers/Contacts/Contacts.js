import React, { useState, useEffect } from 'react'
import Section from 'components/Section'
import { LogoLinks } from 'components/Menu'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import Button from 'components/Button'
import { YMaps, Map, ObjectManager } from 'react-yandex-maps'

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.s} {
    flex-direction: row;
  }
`
const SMapWrapper = styled.div`
  flex: 1;
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

const Contacts = props => {
  const containerRef = React.createRef()
  const [sizeMap, setSizeMap] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const { clientHeight, clientWidth } = containerRef.current

    setSizeMap({
      width: clientWidth > 768 ? Math.ceil(clientWidth / 2) : clientWidth,
      height: 400,
    })
  }, [])
  return (
    <Section titlePage={props.titlePage}>
      <SWrapper>
        <SMapWrapper ref={containerRef}>
          <YMaps>
            <Map
              {...sizeMap}
              defaultState={{ center: [59.946777, 30.321137], zoom: 10 }}
            >
              <ObjectManager
                options={{
                  clusterize: true,
                  gridSize: 32,
                }}
                objects={{
                  openBalloonOnClick: true,
                  preset: 'islands#yellowDotIcon',
                }}
                clusters={{
                  preset: 'islands#redClusterIcons',
                }}
                defaultFeatures={features}
                modules={[
                  'objectManager.addon.objectsBalloon',
                  'objectManager.addon.objectsHint',
                ]}
              />
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
