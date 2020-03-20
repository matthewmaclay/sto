import Section from 'components/Section'
import { Collapse } from 'react-collapse'
import styled from '@emotion/styled'
import Text from 'components/Text'
import { Link } from 'gatsby'

import React from 'react'
import media from 'utils/media'

const SWrapper = styled.div`
  & > .ReactCollapse--collapse {
    transition: height 300ms;
  }
  margin-top: 80px;
  ${media.s} {
    margin-top: 0px;
  }
`
const STitle = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 70px;
  & div {
    font-weight: bold;
    font-size: 32px;
    line-height: 24px;
    ${media.s} {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &:before {
    content: ' ';
    position: absolute;
    height: 12px;
    width: 20px;
    background-position: center;
    right: 0;
    top: 10px;
    transition: transform 300ms;
    ${({ open }) => open && 'transform: rotate(180deg);'}
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgBrczNCcAgDIbhD7pIRugIHaH7XxzBHns0QryIP9HPwAshkOcC8Gq/9oEb0Z68RC3YgcGChZtExX6jWWBQaWG76BBbRV2YF13CZugW1kMprIXSWI0ewcqIF0tY5SqWZjY+agAAAABJRU5ErkJggg==');
  }
  ${media.s} {
    &:before {
      background: transparent;
    }
  }
`

export default function CollapseFooter({ children }) {
  const [open, setOpen] = React.useState()
  React.useEffect(() => setOpen(document.documentElement.clientWidth > 768), [])
  return (
    <SWrapper>
      <STitle open={open} onClick={() => setOpen(!open)}>
        <Text className="mb60" bold type="20">
          Все услуги
        </Text>
      </STitle>
      <Collapse isOpened={open}>{children}</Collapse>
    </SWrapper>
  )
}
