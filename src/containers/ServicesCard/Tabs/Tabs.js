import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'
import { Collapse } from 'react-collapse'
import { setParam, fromRichTextToText } from 'utils/common'
import { get } from 'lodash'
import Text from 'components/Text'
import Tab from 'components/Tab'
import { useStaticQuery, graphql } from 'gatsby'
import Item from './Item'

const SWrapper = styled.div`
  padding-top: 115px;
  ${media.m} {
  }
  & > .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

const SItemsWrapper = styled.div`
  padding-top: 50px;
`
const STabsWrapper = styled.div`
  overflow: scroll;
  display: flex;
  white-space: nowrap;
  ${media.s} {
    justify-content: center;
  }
`

const Tabs = props => {
  const {
    allContentfulServiceCategory: { edges: serviceCategories },
    allContentfulService: { edges: services },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulServiceCategory(sort: { fields: sort }) {
          edges {
            node {
              id
              title
              sort
            }
          }
        }
        allContentfulService {
          edges {
            node {
              id
              img {
                file {
                  url
                }
              }
              stars
              slug
              passenger
              offroad
              description {
                description
              }
              bus
              title
              type {
                id
              }
            }
          }
        }
      }
    `
  )
  const type = props.defaultServiceCategory || serviceCategories[0].node.id

  const [serviceType, setServiceType] = React.useState(type)
  /* eslint-disable react/no-unknown-property, no-console */

  setParam('serviceCategory', type)
  return (
    <SWrapper id="tabs" className="mb20">
      <div itemscope="true" itemtype="http://schema.org/ItemList">
        <link itemprop="url" href="/services" />
        <span itemprop="numberOfItems" content={services.length}></span>
        <STabsWrapper>
          {serviceCategories.map(item => (
            <Tab
              setServiceType={setServiceType}
              serviceType={serviceType}
              key={item.id}
              {...item.node}
            />
          ))}
        </STabsWrapper>
        <Collapse isOpened={!!serviceType}>
          <SItemsWrapper>
            {services
              .filter(
                item => item.node.type && item.node.type.id === serviceType
              )
              .map((item, index) => (
                <Item
                  index={index}
                  slug={item.node.slug}
                  key={item.node.id}
                  title={item.node.title}
                  cost={item.node[props.carType]}
                  stars={item.node.stars}
                  description={fromRichTextToText(
                    get(item, 'node.description.description')
                  )}
                  img={get(item, 'node.img.file.url')}
                />
              ))}
          </SItemsWrapper>
        </Collapse>
      </div>
    </SWrapper>
  )
}

export default Tabs
