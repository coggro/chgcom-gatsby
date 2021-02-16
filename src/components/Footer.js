import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: #3399ff;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; 2021 Corey Gross</p>
    </FooterStyles>
  )
}
