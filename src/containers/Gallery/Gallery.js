import Section from 'components/Section'
import Swiper from 'swiper'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import media from 'utils/media'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const SWrapper = styled.div`
  margin-bottom: 120px;
  img {
    max-height: 400px;
  }
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    min-width: 300px;
    height: 400px;
  }
  .swiper-button-next,
  .swiper-button-prev {
  }
`
const ItemImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 300px;

  ${media.s} {
  }
`

export default function Gallery() {
  const {
    contentfulGallery: { items },
  } = useStaticQuery(
    graphql`
      query {
        contentfulGallery {
          items {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `
  )
  React.useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      slideToClickedSlide: true,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      type: 'fraction',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    })
    swiper.on('slideChange', function() {
      trackCustomEvent({
        category: 'Галлерея',
        action: 'Смена слайда',
      })
    })
  }, [])
  return (
    <Section withoutPadding>
      <SWrapper>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {items
              .filter(item => item.fluid)
              .map(({ fluid, id }) => (
                <div key={id} className="swiper-slide">
                  <ItemImg fluid={fluid} backgroundColor={'#eeeeee'} />
                </div>
              ))}
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </SWrapper>
    </Section>
  )
}
/* <ItemImg fluid={fluid} backgroundColor={'#eeeeee'} /> */
