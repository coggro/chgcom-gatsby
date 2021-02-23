import React from 'react'
import SEO from '../components/SEO'
import styled from 'styled-components'

export const UsesStyles = styled.section``

const UsesPage = () => {
  return (
    <>
      <SEO title={`Uses`} />
      <UsesStyles>
        <div className="container">
<<<<<<< Updated upstream
          <div className="page">
            <h1>Uses</h1>
            <p>
              This is a list of stuff I use, inspired by{' '}
              <a
                href="https://wesbos.com/uses"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wes Bos
              </a>{' '}
              and{' '}
              <a
                href="https://uses.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uses.tech
              </a>
              .
            </p>
            <hr />
            <h2>Development Machines</h2>
=======
          <h1>Uses</h1>
          <h2>
            This is a list of stuff I use, inspired by{' '}
            <a
              href="https://wesbos.com/uses"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wes Bos
            </a>{' '}
            and{' '}
            <a
              href="https://uses.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uses.tech
            </a>
            .
          </h2>
          <h3>Development Machines</h3>
          <ul>
            <li>Personal Laptop - MacBook Pro (Mid 2014)</li>
            <li>Personal Desktop - Custom PC (Built Late 2016) </li>
            <li>Professional Laptop - MacBook Pro (Much Newer)</li>
          </ul>
          <h3>Assorted Hardware</h3>
          <ul>
            <li>Ergodox EZ Ergonomic Mechanical Keyboard</li>
            <li>Massdrop Alt Mechanical Keyboard</li>
            <li>Logitech G604 Lightspeed Wireless Mouse</li>
            <li>Anker Soundcore Life Q30 Over-Ear Headphones</li>
            <li>Anker Soundcore Liberty Air 2 Pro Wireless Headphones</li>
          </ul>
          <h3>Software</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>IntelliJ IDEA (Better for Java and AEM Builds)</li>
            <li>iTerm 2 Terminal</li>
>>>>>>> Stashed changes
            <ul>
              <li>Personal Laptop - MacBook Pro (Mid 2014)</li>
              <li>Personal Desktop - Custom PC (Built Late 2016) </li>
              <li>Professional Laptop - MacBook Pro (Mid 2017)</li>
            </ul>
            <h2>Assorted Hardware</h2>
            <ul>
              <li>Ergodox EZ Ergonomic Mechanical Keyboard</li>
              <li>Massdrop Alt Mechanical Keyboard</li>
              <li>Logitech G604 Lightspeed Wireless Mouse</li>
              <li>Anker Soundcore Life Q30 Over-Ear Headphones</li>
              <li>Anker Soundcore Liberty Air 2 Pro Wireless Earbuds</li>
            </ul>
            <h2>Software</h2>
            <ul>
              <li>Visual Studio Code</li>
              <li>Intelli J IDEA (Better for Java and AEM Builds)</li>
              <li>iTerm 2 Terminal</li>
              <ul>
                <li>oh-my-zsh w/ Powerlevel10k theme</li>
                <li>Node/NPM/NVM</li>
              </ul>
              <li>Firefox</li>
              <li>Slack/Discord</li>
              <li>Adobe Experience Manager 6.5</li>
              <li>React w/ Create-React-App or Gatsby.js</li>
            </ul>
            <h2>Dev Font</h2>
            <ul>
              <li>Jetbrains Mono</li>
            </ul>
            <h2>Gaming</h2>
            <ul>
              <li>Nintendo Switch</li>
              <li>PlayStation 4</li>
              <li>MiSTer FPGA Emulator Box</li>
              <ul>
                <li>
                  Assembled with guidance from&nbsp;
                  <a
                    href="https://github.com/MiSTer-devel/Main_MiSTer/wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MiSTer Project
                  </a>
                </li>
                <li>
                  Plays Arcade, NES, SNES, Game Boy, Game Boy Color, Game Boy
                  Advanced, Sega Genesis, and loads of other games.
                </li>
              </ul>
            </ul>
            <h2>This Site</h2>
            <ul>
              <li>React via Gatsby.js</li>
              <li>
                Style help from /r/UnearthedArcana in the form of free fonts and
                color references.
              </li>
              <li>
                Utilized container widths and responsive breakpoints from
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
      </UsesStyles>
    </>
  )
}

export default UsesPage
