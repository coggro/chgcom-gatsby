import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'

const ResumeStyles = styled.div`
  h2 {
    border-bottom: 2px solid var(--gold);
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    &.bottomless {
      border-bottom: none;
      /* margin-bottom: 0; */
      padding-bottom: 0;
    }
  }
  .topDivider {
    margin: 1rem 0;
  }
`

export default function ResumeTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={`Resume`} />
      <ResumeStyles className="container">
        <div className="page">
          <h1>{frontmatter.title}</h1>
          <h2 className={`bottomless`}>Last Updated {frontmatter.date}</h2>
          <p>
            This is also available on{' '}
            <a
              href="https://www.github.com/coggro/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <hr className="gold topDivider" />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </ResumeStyles>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
