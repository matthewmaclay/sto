import React from 'react'
import { Link } from 'gatsby'
import Button from 'components/Button'
import SEO from 'components/SEO'
import styled from '@emotion/styled'
import Layout from 'components/Layout'

const SWrapper = styled.div`
  height: 30vw;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.orange};
  }
  .text {
    margin-bottom: 20px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Страница не найдена"
      description="Комплексное обслуживание автомобилей по доступным ценам!"
    ></SEO>

    <SWrapper>
      <p className="error">404</p>
      <p className="text">Похоже, мы не можем найти нужную вам страницу.</p>

      <Button className="mb60" style="black" link to="/?from=404">
        На главную
      </Button>
    </SWrapper>
  </Layout>
)

export default NotFoundPage
