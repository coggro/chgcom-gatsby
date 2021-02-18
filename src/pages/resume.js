import React from 'react'
import SEO from '../components/SEO'
import styled from 'styled-components'

export const ResumeStyles = styled.section``

const ResumePage = () => {
  return (
    <>
      <SEO title={`Résumé`} />
      <ResumeStyles>
        <div className="container">
          <h1>Résumé</h1>
          <p>
            My résumé is in Markdown on{' '}
            <a
              href="https://www.github.com/coggro/resume"
              target="_blank"
              rel="noopener nofollower"
            >
              GitHub.
            </a>
          </p>
        </div>
      </ResumeStyles>
    </>
  )
}

export default ResumePage
