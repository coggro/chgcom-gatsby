import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  html {
    color: var(--black);
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0 0 2.4rem 0;
  }
  h1 {
    font-weight: bold;
    margin: 1rem 0 2.4rem 0;
  }
  ul {
    padding-left: 1.5rem;
    ul {
      padding-left: 1rem;
    }
  }
  ul, li, p {
    line-height: 2.2rem;
  }
  a {
    color: var(--black);
    text-decoration: none;

    &:hover {
      color: var(--darkgrey);
      text-decoration: underline;
    }

    &.always-under {
      text-decoration: underline;
    }
  }
  main a {
    text-decoration: underline;
  }
  p {
    margin: 0 0 2.4rem 0;
  }
  .text-center {
    text-align: center;
  }
`

export default Typography
