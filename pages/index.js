import React from 'react'
import styled from 'styled-components'
import AppContainer from '../components/AppContainer'
const PAGE_COUNT = 20
const pageNumbers = []

for (let i = 0; i < PAGE_COUNT; i++) {
  pageNumbers.push(i + 1)
}

const BackgroundContainer = styled.div`
  background: #f5f6f7;
  min-height: 100vh;
`

const IndexContainer = styled.div`
  display: flex;
  width: 90vw;
  margin: 40px 10px 10px 10px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

const index = () => {
  return (
    <BackgroundContainer>
      <IndexContainer>
        {pageNumbers.map((pageNumber) => {
          return <AppContainer index={pageNumber} />
        })}
      </IndexContainer>
    </BackgroundContainer>
  )
}

export default index
