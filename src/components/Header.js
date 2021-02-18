import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Responsive } from '../styles/Responsive'

import { IconContext } from 'react-icons'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const HeaderStyles = styled.header`
  background: var(--blue);
  color: var(--white);
  font-size: 1.8rem;
  width: 100%;

  .navbar {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .logo {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0;

      a {
        padding-bottom: 0;
      }

      button {
        background: none;
        border: none;
        height: 1.8rem;
      }
    }

    a {
      color: var(--white);
      padding-bottom: 1.5rem;

      &:hover {
        color: var(--grey);
      }
    }

    nav {
      display: none;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 1.5rem;

      &.open {
        display: flex;
      }

      a {
        margin-left: 0;
      }

      .icons {
        margin-left: 0;

        .icon {
          margin-left: 0.75rem;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }

  @media (${Responsive.device.md}) {
    .navbar {
      flex-direction: row;

      .logo {
        padding-bottom: 0;

        button {
          display: none;
          .icon {
            color: var(--white);
            fill: var(--white);
            stroke: var(--white);
          }
        }
      }

      a {
        margin-bottom: 0;
      }

      nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-top: 0;

        a {
          margin-left: 2rem;
        }

        .icons {
          margin-left: 2rem;
        }
      }
    }
  }
`

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false)

  return (
    <IconContext.Provider value={{ color: `white` }}>
      <HeaderStyles>
        <div className="navbar container">
          <div className="logo">
            <Link to={`/`}>CoreyHGross.com</Link>
            <button onClick={() => setHeaderOpen(!headerOpen)}>
              {headerOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <nav className={`${headerOpen ? 'open' : ``}`}>
            <Link to={`/about`}>About</Link>
            <Link to={`/resume`}>Résumé</Link>
            <Link to={`/uses`}>Uses</Link>
            <div className={`icons`}>
              <a
                className={`icon`}
                href="https://www.twitter.com/coggro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/coreyhgross"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.github.com/coggro"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </nav>
        </div>
      </HeaderStyles>
    </IconContext.Provider>
  )
}
