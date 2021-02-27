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
  background: var(--darkred);
  color: var(--ivory);
  font-size: 1.125rem;
  width: 100%;

  .navbar {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

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
        height: 1.125rem;
      }
    }

    a {
      color: var(--ivory);
      padding-bottom: 1rem;

      &:hover {
        color: var(--grey);
        text-decoration-color: var(--grey);
      }
    }

    nav {
      display: none;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 1rem;

      &.open {
        display: flex;
      }

      a {
        margin-left: 0;
      }

      .icons {
        margin-left: 0;

        .icon {
          margin-left: 0.5rem;

          .header-icons {
            color: var(--ivory);
            stroke: var(--ivory);

            &:hover {
              color: var(--grey);
              stroke: var(--grey);
            }
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
            color: var(--ivory);
            fill: var(--ivory);
            stroke: var(--ivory);
          }
        }
      }

      a {
        margin-bottom: 0;
        padding-bottom: 0;
      }

      nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-top: 0;

        a {
          margin-left: 1.25rem;
        }

        .icons {
          margin-left: 0;

          .icon {
            margin-left: 1.25rem;
          }
        }
      }
    }
  }
`

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false)

  return (
    <IconContext.Provider value={{ className: `header-icons` }}>
      <HeaderStyles>
        <div className="navbar container">
          <div className="logo">
            <Link to={`/`}>CoreyHGross.com</Link>
            <button
              onClick={() => setHeaderOpen(!headerOpen)}
              aria-label="navbar-toggle"
            >
              {headerOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <nav className={`${headerOpen ? 'open' : ``}`}>
            <Link to={`/about`}>About</Link>
            <Link to={`/resume`}>Resume</Link>
            <Link to={`/uses`}>Uses</Link>
            <div className={`icons`}>
              <a
                className={`icon`}
                href="https://www.twitter.com/coggro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/coreyhgross"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
              <a
                href="https://www.github.com/coggro"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      </HeaderStyles>
    </IconContext.Provider>
  )
}
