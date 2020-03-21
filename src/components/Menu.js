import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import LogoSVG from '../icons/logo'
import { slide as Slide } from 'react-burger-menu'
import media from 'utils/media'

import Phone from '../icons/phone'
import Map from '../icons/map'

const Nav = styled.nav`
  height: ${({ theme, ...props }) =>
    props.absolute ? theme.sizes.menu.absolute : theme.sizes.menu.relative};
  ${props =>
    props.absolute
      ? `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, #000000 100%);
      position: absolute;
  `
      : `
      background: black;
  `}
  svg {
    fill: white;
  }
  width: 100%;
  padding: 0 12px;
  ${media.s} {
    padding: 0 60px;
  }
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 100;
  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.m} {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin-left: 0;
    font-size: 18px;
    line-height: 32px;
  }
  a {
    text-decoration: none;
    font-family: ${props => props.theme.fonts.navBar};
    color: ${props => props.theme.colors.textWhite};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    letter-spacing: 0.03em;
    transition: all 0.2s ease;
    padding: 0 14px;
    border-top: 3px solid transparent;
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    width: max-content;
    &:hover {
      transition: all 0.2s ease;
      border-top: 3px solid ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.accent};
    }
  }
  .desktopLinks {
    margin: 0 -12px;
    ${media.l} {
      margin-right: -14px;
    }
    display: none;
    ${media.m} {
      display: block;
    }
    li {
      height: 100%;

      a {
        padding: 0 7px;
        ${media.l} {
          padding: 0 14px;
        }
      }
    }
  }
  .mobileLinks {
    display: block;
    ${media.m} {
      display: none;
    }
    .logoLinks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > * {
        margin-bottom: 12px;
      }
    }
    ul {
      margin-top: 70px;
      height: max-content;
    }
    li {
      a {
        font-size: 18px;
      }
      margin-bottom: 20px;
    }
  }
`
const Circle = styled.span`
  visibility: hidden;
  margin-left: 5px;
  color: ${props => props.theme.colors.accent};
`

const LogoBlock = styled.span`
  display: flex;
  .logoLinks .phone a {
    padding: 0;
    display: inline-block;
    margin-left: 5px;
    vertical-align: baseline;
    border: none;
  }
  .logoLinks .phone a:hover {
    border: none;
  }
  .logoLinks .phone {
    margin-bottom: 5px;
  }
  .logoLinks .adress span {
    color: white;
    padding: 0;
    display: inline-block;
    margin-left: 5px;
    vertical-align: baseline;
    font-family: 'Ubuntu', sans-serif;
  }
  .logo:hover {
    border-top: none !important;
  }
  .logo {
    border-top: none !important;
    padding-left: 0 !important;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 222222;
  }
  .logoLinks {
    align-self: center;

    display: inline-block;
    width: max-content;
  }
`

const SLogoLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => !props.big && 'align-items: center;'}
  justify-content: center;

  .logoLinks__item {
    position: relative;
    padding-left: 15px;
  }
  a {
    font-weight: bold;
  }
  svg {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0;
    top: 3px;
  }
  .accent {
    padding-left: 25px;
    margin-top: 8px;
    cursor: pointer;
  }
  .big {
    .logoLinks__item {
      position: relative;
      padding-left: 25px;
    }
    svg {
      width: 16px;
      height: 16px;
      fill: black;
      margin-right: 15px;
      top: 0;
    }
    .phone {
      a {
        color: black;
      }

      margin-bottom: 30px;
    }
  }
`
const Links = () => (
  <ul>
    <li key={0}>
      <Link to="/" activeClassName="active">
        Главная <Circle>●</Circle>
      </Link>
    </li>
    <li key={1}>
      <Link to="/about" activeClassName="active">
        О Нас <Circle>●</Circle>
      </Link>
    </li>
    <li key={2}>
      <Link to="/online" activeClassName="active">
        Онлайн-запись <Circle>●</Circle>
      </Link>
    </li>
    <li key={3}>
      <Link to="/services" activeClassName="active">
        Услуги <Circle>●</Circle>
      </Link>
    </li>
    <li key={4}>
      <Link to="/contacts" activeClassName="active">
        Контакты <Circle>●</Circle>
      </Link>
    </li>
  </ul>
)
export const LogoLinks = ({ className, withIcons, big }) => {
  const {
    contentfulMainPage: { addressString, phone },
  } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          addressString
          phone
        }
      }
    `
  )
  return (
    <SLogoLinksWrapper big={big}>
      <div className={`${big && 'big'} ${className}`}>
        <div className="logoLinks">
          <div className="logoLinks__item phone">
            {withIcons && <Phone />}
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="logoLinks__item adress">
            {withIcons && <Map />}
            <span>{addressString}</span>
          </div>
        </div>
      </div>
      {big && <div className="accent">Построить маршрут</div>}
    </SLogoLinksWrapper>
  )
}
const Logo = () => (
  <LogoBlock>
    <a href="/" className="logo">
      <LogoSVG />
    </a>
    <LogoLinks header withIcons className="s-only" />
  </LogoBlock>
)

const Menu = ({ absolute }) => {
  return (
    <Nav absolute={absolute}>
      <Logo />
      <div className="desktopLinks">
        <Links />
      </div>

      <div className="mobileLinks">
        <Slide width={'100vw'} right>
          <Links />
          <LogoLinks header />
        </Slide>
      </div>
    </Nav>
  )
}

export default Menu

/*


*/
