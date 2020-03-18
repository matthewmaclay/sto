import React from 'react'
import Img from 'gatsby-image'
import Text from 'components/Text'
import Heading from 'components/Heading'
import styled from '@emotion/styled'
import media from 'utils/media'
import Scroll from 'components/Scroll'
import PassengerCar from 'icons/PassengerCar'
import OffroadCar from 'icons/offroadCar'
import MicroCar from 'icons/microCar'

import CarCard from './CarCard'

const SWrapper = styled.div`
  position: relative;
  top: -100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1320px;
  width: 100vw;
  padding: 50px 40px;
  ${media.m} {
    padding: 115px 80px;
    flex-direction: row;
  }

  margin: auto;
  background: white;
  box-shadow: 4px 20px 96px rgba(0, 27, 109, 0.1);
  border-radius: 12px;
`
const SCarsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.s} {
    flex-direction: row;
    justify-content: center;
  }
`
const STitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`

const SCard = styled.div`
  min-height: 300px;
  height: 100vh;
`

const ServicesCard = props => (
  <SCard>
    <SWrapper height={props.height}>
      <STitleWrapper className="mb20">
        <Text className="mb10" bold type="28">
          Я хочу узнать цены для моего автомобиля
        </Text>
        <Text opacity type="14">
          Выберите тип автомобиля
        </Text>
      </STitleWrapper>
      <SCarsWrapper>
        <CarCard background="rgba(241, 105, 53, 0.1);" icon={<PassengerCar />}>
          Легковой
        </CarCard>
        <CarCard background="rgba(242, 179, 97, 0.1);" icon={<OffroadCar />}>
          Внедородные паркетники
        </CarCard>
        <CarCard background="rgba(138, 110, 80, 0.1);" icon={<MicroCar />}>
          Микроавтобусы и мультивены
        </CarCard>
      </SCarsWrapper>
    </SWrapper>
  </SCard>
)

export default ServicesCard
