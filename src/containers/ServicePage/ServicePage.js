import React from 'react'
import Img from 'gatsby-image'
import Section from 'components/Section'
import Text from 'components/Text'
import styled from '@emotion/styled'
import media from 'utils/media'
import Form from 'containers/ServicesCard/Form'
import PassengerCar from 'icons/PassengerCar'
import OffroadCar from 'icons/offroadCar'
import MicroCar from 'icons/microCar'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import CarCard from './CarCard'
import Button from 'components/Button/Button'

const SImg = styled(Img)`
  margin-bottom: 50px;
`
const SWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.s} {
    flex-direction: row;
  }
`
const SSideBar = styled.div`
  max-width: 306px;
  margin-bottom: 80px;
  ${media.s} {
    margin-left: 144px;
    margin-bottom: 0;
  }
  .sticky {
    position: sticky;
    top: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  order: 1;
  ${media.s} {
    order: 2;
  }
`

const SContent = styled.div`
  max-width: 650px;
  flex-grow: 2;
  order: 2;
  ${media.s} {
    order: 1;
  }
`

const SLayout = styled.div`
  position: relative;
  display: flex;
  max-width: 1200px;
  margin: auto;
`
const SSectionWithBorder = styled(Section)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
  ${media.s} {
    margin-bottom: 120px;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const ServicePage = ({ title, description, bus, passenger, offroad, img }) => {
  console.log(img)
  return (
    <div itemscope="true" itemtype="http://schema.org/Product">
      <span itemprop="name" content={title}></span>
      <Section titlePage={title}>
        <SLayout>
          <SWrapper>
            <SContent>
              <SImg
                itemprop="image"
                fluid={img.fluid}
                backgroundColor={'#eeeeee'}
              />
              <Text className="mb20" type="content20">
                <div
                  itemprop="description"
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      description ? JSON.parse(description.description) : ''
                    ).replace(/(<([^>]+)>)/gi, ''),
                  }}
                ></div>
              </Text>
            </SContent>

            <SSideBar>
              <div
                className="sticky"
                itemprop="offers"
                itemscope="true"
                itemtype="http://schema.org/Offer"
              >
                <CarCard
                  withSchema
                  price={passenger}
                  type="passenger"
                  bg="rgba(241, 105, 53, 0.1);"
                  activeBg="rgba(241, 105, 53, 0.3);"
                  icon={<PassengerCar />}
                >
                  Легковой
                </CarCard>
                <CarCard
                  price={offroad}
                  type="offroad"
                  bg="rgba(242, 179, 97, 0.1);"
                  activeBg="rgba(242, 179, 97, 0.1);"
                  icon={<OffroadCar />}
                >
                  Внедородные паркетники
                </CarCard>
                <CarCard
                  price={bus}
                  type="bus"
                  bg="rgba(138, 110, 80, 0.1);"
                  activeBg="rgba(138, 110, 80, 0.1);"
                  icon={<MicroCar />}
                >
                  Микроавтобусы и мультивены
                </CarCard>
                <Button link to="/online">
                  Записаться
                </Button>
              </div>
            </SSideBar>
          </SWrapper>
        </SLayout>
      </Section>
      <SSectionWithBorder withoutPadding>
        <Form />
      </SSectionWithBorder>
    </div>
  )
}

export default ServicePage
