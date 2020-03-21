import Section from 'components/Section'
import styled from '@emotion/styled'
import { LogoLinks } from 'components/Menu'
import Text from 'components/Text'
import LogoSVG from 'icons/logo'
import media from 'utils/media'
import Item from './Item'
import Collapse from './Collapse'

import React from 'react'
import Button from 'components/Button/Button'

const SWrapper = styled.div`
  padding: 102px 0px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.pink};
  align-items: center;
  justify-content: center;
  ${media.s} {
    flex-direction: row;
    align-items: flex-start;
  }
`

const SServices = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  width: 300px;
  ${media.s} {
    order: 1;
    justify-content: center;
    align-items: center;
  }
`

const SInfo = styled.div`
  flex: 1;
  ${media.s} {
    order: 2;
  }
`
export default function Footer(props) {
  return (
    <SWrapper>
      <SInfo>
        <LogoSVG className="mb45" />
        <Text className="mb25" type="14" opacity>
          Вы можете оставить свой номер телефона,
          <br /> чтобы узнать все подробности вашего ремонта
        </Text>
        <Button className="mb60" style="black">
          Записаться онлайн
        </Button>

        <LogoLinks big withIcons></LogoLinks>
      </SInfo>
      <SServices>
        <Collapse>
          <Item>Покраска</Item>
          <Item>Ремонт</Item>
        </Collapse>
      </SServices>
    </SWrapper>
  )
}