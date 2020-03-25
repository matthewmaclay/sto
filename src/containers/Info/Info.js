import Section from 'components/Section'
import styled from '@emotion/styled'
import Text from 'components/Text'
import { useStaticQuery, graphql, Link } from 'gatsby'

import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const SWrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
  font-size: 20px;
  p {
    margin-bottom: 20px;
  }
  ul,
  li {
    list-style: circle outside;
  }
  ul {
    padding-left: 20px;
  }
  b {
    font-weight: bolder;
  }
`

export default function Info(props) {
  const {
    contentfulAboutPage: { text },
  } = useStaticQuery(
    graphql`
      query {
        contentfulAboutPage {
          text {
            json
          }
        }
      }
    `
  )
  return (
    <Section titlePage={props.titlePage}>
      <SWrapper>
        {props.page ? (
          <div
            className="mb20"
            type="24"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(text.json),
            }}
          ></div>
        ) : (
          <React.Fragment>
            <Text className="mb20" type="24">
              Вы можете приехать к нам в любой день в любое время или &nbsp;
              <Link className="accent" to="/online?from=about">
                записаться на ремонт онлайн.
              </Link>
            </Text>
            <Text type="24">
              У нас можно оставить автомобиль или ждать окончания ТО в уютном
              зале с телевизором за чашечкой чая или кофе
            </Text>
          </React.Fragment>
        )}
      </SWrapper>
    </Section>
  )
}
