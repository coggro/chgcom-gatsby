import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Responsive } from '../styles/Responsive'

import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const HeaderStyles = styled.header`
  background: var(--blue);
  color: var(--white);
  width: 100%;

  .navbar {
    display: flex;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media ${Responsive.device.sm} {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    a {
      color: var(--white);

      &:hover {
        color: var(--grey);
      }
    }

    nav {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      a {
        padding-left: 1.25rem;
      }

      .icons {
        padding-left: 1.25rem;

        .icon {
          padding-left: 0.75rem;

          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="navbar container">
        <div className="logo">
          <Link to={`/`}>CoreyHGross.com</Link>
        </div>
        <nav>
          <Link to={`/about`}>About</Link>
          <Link to={`/uses`}>Uses</Link>
          <div className={`icons`}>
            <a className={`icon`} href="https://www.twitter.com/coggro">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/coreyhgross" className="icon">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/coggro" className="icon">
              <FaGithub />
            </a>
          </div>
        </nav>
      </div>
    </HeaderStyles>
  )
}
