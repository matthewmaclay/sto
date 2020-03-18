import React from 'react'
import styled from '@emotion/styled'
import media from 'utils/media'

import Text from 'components/Text'
import Tab from 'components/Tab'
import { useStaticQuery, graphql } from 'gatsby'

import Item from './Item'

const SWrapper = styled.div`
  padding-top: 50px;

  ${media.m} {
    padding-top: 115px;
  }
`

const SItemsWrapper = styled.div`
  margin-top: 60px;
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
      <SItemsWrapper>
        {services
          .filter(item => item.node.type.id === serviceType)
          .map(item => (
            <Item
              key={item.id}
              title={item.node.title}
              cost={item.node[props.carType]}
            />
          ))}
      </SItemsWrapper>
    </SWrapper>
  )
}

export default Tabs
