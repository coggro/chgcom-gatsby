import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const ResumeStyles = styled.div`
  h2 {
    margin-bottom: 0.8rem;

    &.bottomless {
      border-bottom: none;
    }
  }
`

export default function ResumeTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
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
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </ResumeStyles>
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
