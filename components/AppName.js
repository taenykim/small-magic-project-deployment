import React from 'react'
import styled from 'styled-components'

const AppNameContainer = styled.div`
  font-family: escore3;
  font-size: 12px;
  margin-top: 10px;
`

const AppName = ({ idx }) => {
  return <AppNameContainer>페이지{idx}</AppNameContainer>
}

export default AppName
