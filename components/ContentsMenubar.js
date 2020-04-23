import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { DOCKER_STORE, DOCKER_DELETE } from '../reducers/wrapper'

const ContentsMenubarContainer = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 0;
  & img {
    width: 17px;
    height: 17px;
  }
  background: #f5f6f7;
  position: absolute;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
  border-radius: 2px;
  padding: 2px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }
  & > img {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
  }
`

const ContentsMenubar = ({ name }) => {
  const dispatch = useDispatch()

  const storeHandler = () => {
    dispatch({
      type: DOCKER_STORE,
      data: name,
    })
    return
  }

  const storeReset = () => {
    dispatch({
      type: DOCKER_DELETE,
      data: name,
    })
    return
  }

  return (
    <ContentsMenubarContainer>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a style={{ margin: '2px 2px 2px 10px' }}>
          <ImageContainer onClick={storeReset}>
            <img src={process.env.BACKEND_URL + '/cancel.png'} />
          </ImageContainer>
        </a>
      </Link>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a style={{ margin: '2px 2px 2px 10px' }}>
          <ImageContainer onClick={storeHandler}>
            <img src={process.env.BACKEND_URL + '/bottom_arrow.png'}></img>
          </ImageContainer>
        </a>
      </Link>
    </ContentsMenubarContainer>
  )
}

export default ContentsMenubar
