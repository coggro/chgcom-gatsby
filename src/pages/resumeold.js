import React from 'react'
import SEO from '../components/SEO'
import styled from 'styled-components'

export const ResumeStyles = styled.section``

const ResumePage = () => {
  return (
    <>
      <SEO title={`Resume`} />
      <ResumeStyles>
        <div className="container">
          <div className="page">
            <h1>Resume</h1>
            <p>
              My resume is in Markdown on{' '}
              <a
                href="https://www.github.com/coggro/resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub.
              </a>
            </p>
          </div>
        </div>
      </ResumeStyles>
    </>
  )
}

export default ResumePage
