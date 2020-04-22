import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
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

  &:active {
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }

  & > div {
    font-family: escore9;
    font-size: 12px;
  }
`

const AppIcon = ({ idx }) => {
  let url = `${process.env.BACKEND_URL}/page${idx}`
  const str = 'PAGE' + idx

  return (
    <Link href={url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer idx={idx}>
          <div>{str}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default AppIcon
