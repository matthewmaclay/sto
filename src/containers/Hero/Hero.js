import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import media from 'utils/media'
import Scroll from 'components/Scroll'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  ${media.s} {
    padding: 60px;
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: white;
`
const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 300px;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Hero = props => (
  <Wrapper height={props.height}>
    <BgImg fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
    <Content> {props.children}</Content>
    <Scroll />
  </Wrapper>
)

export default Hero
