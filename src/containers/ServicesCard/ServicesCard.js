import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
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
import HeaderText from './HeaderText'
import Tabs from './Tabs'

const SWrapper = styled.div`
  position: relative;
  top: -100px;

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
  position: relative;
  .wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 60px;
    ${media.m} {
      flex-direction: row;
    }
  }
  & > .ReactCollapse--collapse {
    transition: height 300ms;
  }
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

const SCard = styled.div`
  min-height: 300px;
  height: 100vh;
`

const ServicesCard = props => {
  const [carType, setCarType] = useState(false)
  return (
    <SCard>
      <SWrapper>
        <div className="wrap">
          <HeaderText />
          <SCarsWrapper>
            <CarCard
              activeType={carType}
              type="passenger"
              bg="rgba(241, 105, 53, 0.1);"
              activeBg="rgba(241, 105, 53, 0.3);"
              icon={<PassengerCar />}
              setCarType={setCarType}
            >
              Легковой
            </CarCard>
            <CarCard
              activeType={carType}
              type="offroad"
              bg="rgba(242, 179, 97, 0.1);"
              activeBg="rgba(242, 179, 97, 0.1);"
              icon={<OffroadCar />}
              setCarType={setCarType}
            >
              Внедородные паркетники
            </CarCard>
            <CarCard
              activeType={carType}
              type="bus"
              bg="rgba(138, 110, 80, 0.1);"
              activeBg="rgba(138, 110, 80, 0.1);"
              icon={<MicroCar />}
              setCarType={setCarType}
            >
              Микроавтобусы и мультивены
            </CarCard>
          </SCarsWrapper>
        </div>
        <Collapse isOpened={!!carType}>
          <Tabs carType={carType} />
        </Collapse>
      </SWrapper>
    </SCard>
  )
}

export default ServicesCard
