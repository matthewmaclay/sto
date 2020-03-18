import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'
import { Collapse } from 'react-collapse'

import Text from 'components/Text'
import Tab from 'components/Tab'
import { useStaticQuery, graphql } from 'gatsby'

import Item from './Item'

const SWrapper = styled.div`
  padding-top: 50px;

  ${media.m} {
    padding-top: 115px;
  }
  & > .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

const SItemsWrapper = styled.div``
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
        allContentfulServiceCategory {
          edges {
            node {
              id
              title
            }
          }
        }
        allContentfulService {
          edges {
            node {
              id
              passenger
              offroad
              bus
              title
              description
              type {
                id
              }
            }
          }
        }
      }
    `
  )
  const [serviceType, seServiceType] = React.useState(false)
  return (
    <SWrapper className="mb20">
      <STabsWrapper>
        {serviceCategories.map(item => (
          <Tab
            setServiceType={seServiceType}
            serviceType={serviceType}
            key={item.id}
            {...item.node}
          />
        ))}
      </STabsWrapper>
      <Collapse isOpened={!!serviceType}>
        <SItemsWrapper>
          {services
            .filter(item => item.node.type && item.node.type.id === serviceType)
            .map(item => (
              <Item
                key={item.id}
                title={item.node.title}
                cost={item.node[props.carType]}
              />
            ))}
        </SItemsWrapper>
      </Collapse>
    </SWrapper>
  )
}

export default Tabs
