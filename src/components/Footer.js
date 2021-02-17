import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: var(--blue);
  color: var(--white);
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <p>&copy; 2021 Corey Gross</p>
      </div>
    </FooterStyles>
  )
}
