import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f5f6f7;
`

const Container = styled.div`
  font-family: escore7;
  color: ${(props) => {
    if (props.idx % 9 === 0) return 'red'
    if (props.idx % 9 === 1) return 'blue'
    if (props.idx % 9 === 2) return 'purple'
    if (props.idx % 9 === 3) return 'orange'
    if (props.idx % 9 === 4) return 'green'
    if (props.idx % 9 === 5) return 'navy'
    if (props.idx % 9 === 6) return 'darkgoldenrod'
    if (props.idx % 9 === 7) return 'darkcyan'
    if (props.idx % 9 === 8) return 'darkmagenta'
    return 'black'
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  box-shadow: -4px -2px 4px 0px white, 4px 2px 6px 0px #dfe4ea;
  padding: 40px 40px 40px 40px;
`

const Layout = ({ name }) => {
  return (
    <>
      <BackgroundContainer>
        <ContentsMenubar name={name} />
        <Container idx={Number(name.slice(4))}>안뇽! 여긴 {name.toUpperCase()}</Container>
      </BackgroundContainer>
    </>
  )
}

export default Layout
