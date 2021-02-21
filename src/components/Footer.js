import React from 'react'
import styled from 'styled-components'
import { Responsive } from '../styles/Responsive'

const FooterStyles = styled.footer`
  background-color: var(--red);
  box-sizing: border-box;
  color: var(--white);
  padding: 2rem 0;

  .container {
    display: flex;
    flex-direction: column;

    p {
      display: flex;
      flex: 1;
      justify-content: center;
      margin: 0;
    }
    @media (${Responsive.device.sm}) {
      flex-direction: row;

      p {
        justify-content: flex-start;

        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }

  a {
    color: var(--white);
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <p>
          Email Me:&nbsp;
          <a href="mailto:corey@coreyhgross.com">corey@coreyhgross.com</a>
        </p>
        <p style={{ margin: 0 }}>&copy; 2021 Corey Gross</p>
      </div>
    </FooterStyles>
  )
}
