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
import { Link } from 'gatsby'
import Form from './Form/Form'

const SWrapper = styled.div`
  position: relative;
  top: -100px;
  margin-bottom: 250px;
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

const SCard = styled.div``

const SLinkToPrice = styled.div`
  margin-bottom: 160px;
  display: flex;
  justify-content: center;
  @keyframes hover {
    50% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
  a {
    position: relative;
    padding-right: 40px;
    text-decoration: none;
    color: black;
  }
  a:before {
    content: ' ';
    position: absolute;
    right: 0;
    width: 24px;
    height: 18px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgB7ZOxDcAgDAQ/mYARGCEjZISMkE1gM0aAUdgAvqCnACOBfNLZ3X9hGRjjpwZCPLTQKFnitURLzMURqMVcbNvp5sjYDAfBO2j4YeEvFnzt1wuv73okIV4alVkAAAAASUVORK5CYII=');
  }
  a:hover:before {
    animation: hover 1s ease-in-out infinite;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const ServicesCard = props => {
  const searchParams = new URLSearchParams(props.location.search)
  const [carType, setCarType] = useState(searchParams.get('carType'))
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
          <Tabs
            defaultServiceCategory={searchParams.get('serviceCategory')}
            carType={carType}
          />
          <Text opacity type="14">
            &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp; – &nbsp;&nbsp;Цена может измениться
            из-за конструктивных особенностей автомобиля или объема.
            <br /> &nbsp;**&nbsp;&nbsp; – &nbsp;&nbsp;Цена может измениться
            из-за конструктивных особенностей автомобиля или объема работ. ( ДВС
            – бензин, дизель).
            <br /> ***&nbsp; – &nbsp;&nbsp;Цена может измениться от объема работ
            или количества форсунок.
          </Text>
          <Form />
        </Collapse>
      </SWrapper>
      <SLinkToPrice>
        <Link to="/price">Смотреть все услуги</Link>
      </SLinkToPrice>
    </SCard>
  )
}

export default ServicesCard
