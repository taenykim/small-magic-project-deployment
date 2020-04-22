import React from 'react'
import styled from 'styled-components'
import AppIcon from '../components/AppIcon'
import AppName from '../components/AppName'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px 10px 20px;
  height: fit-content;
`

const AppContainer = ({ index }) => {
  return (
    <Container>
      <AppIcon idx={index} />
      <AppName idx={index} />
    </Container>
  )
}

export default AppContainer
