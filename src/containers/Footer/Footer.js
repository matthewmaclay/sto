import Section from 'components/Section'
import styled from '@emotion/styled'
import { LogoLinks } from 'components/Menu'
import Text from 'components/Text'
import LogoSVG from 'icons/logo'

import Item from './Item'

import React from 'react'
import Button from 'components/Button/Button'

const SWrapper = styled.div`
  padding: 102px 174px;
  display: flex;
  background: ${({ theme }) => theme.colors.pink};
`

const SServices = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const SInfo = styled.div`
  flex: 1;
`
export default function Footer(props) {
  return (
    <SWrapper>
      <SServices>
        <Text className="mb60" bold type="20">
          Все услуги
        </Text>
        <Item>Покраска</Item>
        <Item>Ремонт</Item>
      </SServices>
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
    </SWrapper>
  )
}
