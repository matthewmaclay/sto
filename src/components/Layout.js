import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from 'containers/Footer'
import { globalStyles } from '../styles/globalStyles.js'
import { useStaticQuery, graphql } from 'gatsby'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
  .accent {
    color: ${props => props.theme.colors.orange};
  }
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  const { contentfulMainPage } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          addressString
          phone
          heroImg {
            file {
              url
            }
          }
        }
      }
    `
  )
  return (
    <Root className="siteRoot">
      <div itemscope="true" itemtype="http://schema.org/Service">
        <meta itemprop="serviceType" content="Автосервис" />
        <span
          className="hidden"
          itemprop="provider"
          itemscope="true"
          itemtype="http://schema.org/LocalBusiness"
        >
          <span itemprop="name">Autohof24</span>
          <span itemprop="address">
            Санкт-Петербург {contentfulMainPage.addressString}
          </span>
          <span itemprop="telephone">{contentfulMainPage.phone}</span>
          <span itemprop="priceRange">1000</span>
          <img itemprop="logo" src="/images/share.png" alt="hotel logo" />
          <span
            itemprop="image"
            content={contentfulMainPage.heroImg.file.url}
            alt="hotel logo"
          />
        </span>

        <div className="siteContent">
          <Menu absolute={props.absoluteNav} />
          <div id="main">{props.children}</div>
        </div>
        <Footer />
        <Global styles={globalStyles} />
      </div>
    </Root>
  )
}

export default Layout
