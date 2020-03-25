import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import LogoSVG from '../icons/logo'
import { slide as Slide } from 'react-burger-menu'
import media from 'utils/media'

/* eslint-disable react/no-unknown-property, no-console */
import Phone from '../icons/phone'
import Map from '../icons/map'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const phoneLinkRef = React.createRef()

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
  transform: scale(0.9);
  ${media.s} {
    transform: none;
  }
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
  .littlePhone {
    svg {
      display: none;
      position: relative;

      ${media.s} {
        display: inline-block;
      }
    }
    .phone {
      left: -30px;
      ${media.s} {
        left: 0;
        font-size: inherit;
      }
      a {
        font-size: 12px;
        ${media.s} {
          font-size: inherit;
        }
      }
    }
  }
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
    text-decoration: none;
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
const STriangle = styled.span`
  margin-bottom: -20px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid ${props => props.theme.colors.orange};
  position: relative;
  top: 17px;
  left: 5px;
  cursor: pointer;
  animation: phoneTriangle 1s ease-in-out infinite;
  a {
    position: absolute;
  }
  select {
    top: -15px;
    left: -5px;
    position: absolute;
    opacity: 0;
    width: 10px;
  }
  @keyframes phoneTriangle {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
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
export const LogoLinks = ({ className, withIcons, big, ...props }) => {
  const {
    contentfulMainPage: {
      addressString,
      additionalPhones,
      phone,
      heroImg,
      address: [
        {
          coordinates: { lat, lon },
        },
      ],
    },
  } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          addressString
          phone
          additionalPhones
          heroImg {
            file {
              url
            }
          }
          address {
            coordinates {
              lat
              lon
            }
          }
        }
      }
    `
  )

  return (
    <SLogoLinksWrapper big={big}>
      <span itemProp="image" content={heroImg.file.url} alt="hero img" />
      <div className={`${big && 'big'} ${className}`}>
        <div className="logoLinks">
          <div className="logoLinks__item phone">
            {withIcons && <Phone />}
            <a itemProp={!big && 'telephone'} href={`tel:${phone}`}>
              {phone}
            </a>
            <STriangle>
              <a ref={phoneLinkRef} href=""></a>
              <select
                name="forma"
                onChange={e => {
                  console.log(phoneLinkRef.current)
                  phoneLinkRef.current.href = e.target.value
                  phoneLinkRef.current.click()
                }}
              >
                {additionalPhones.map(item => (
                  <option key={item} value={`tel:${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </STriangle>
          </div>
          <div
            className={`logoLinks__item adress ${
              props.addressClassName ? props.addressClassName : ''
            }`}
          >
            {withIcons && <Map />}
            <span itemProp={!big && 'address'}>{addressString}</span>
          </div>
        </div>
      </div>
      {big && (
        <a
          href={`https://yandex.ru/maps/?rtext=~${lat}%2C${lon}`}
          className="accent"
          target="_blank"
          onClick={() =>
            trackCustomEvent({
              category: 'Построить маршрут',
              action: 'Клик',
            })
          }
        >
          Построить маршрут
        </a>
      )}
    </SLogoLinksWrapper>
  )
}
const Logo = () => (
  <LogoBlock>
    <a href="/" className="logo">
      <LogoSVG />
    </a>
    <LogoLinks
      className="littlePhone"
      header
      withIcons
      addressClassName="s-only"
    />
  </LogoBlock>
)

const Menu = ({ absolute }) => {
  return (
    <div
      iteprop="provider"
      itemscope="true"
      itemtype="http://schema.org/LocalBusiness"
    >
      <Nav absolute={absolute}>
        <span className="hidden">
          <span itemProp="name">Autohof24 &nbsp;</span>
          <span itemProp="priceRange" content="1000"></span>
          <span itemProp="logo" src="/images/share.png" alt="logo" />
        </span>
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
    </div>
  )
}

export default Menu

/*


*/
