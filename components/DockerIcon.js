import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 15%;
  background: #f5f6f7;
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
  margin-right: 10px;

  & > div {
    font-family: escore9;
    font-size: 20px;
    text-shadow: 3px 3px #ccc;
  }
`

const DockerIcon = ({ item }) => {
  const url = `/${item}`
  return (
    <Link href={url} as={process.env.BACKEND_URL + url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer idx={Number(item.slice(4))}>
          <div>{Number(item.slice(4))}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default DockerIcon
