import React from 'react'
import styled from 'styled-components'
import { Responsive } from '../styles/Responsive'

const FooterStyles = styled.footer`
  background-color: var(--darkred);
  box-sizing: border-box;
  color: var(--ivory);
  padding: 1.25rem 0;

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
    color: var(--ivory);
    text-decoration: underline;
    text-decoration-color: var(--ivory);

    &:hover {
      color: var(--grey);
      text-decoration-color: var(--grey);
    }
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
