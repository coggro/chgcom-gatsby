import { createGlobalStyle } from 'styled-components'
import sirBranchesFont from '../assets/fonts/sirbranches-headers/sirbranches-small-caps.woff'
import crazyTomeFont from '../assets/fonts/crazytome-body/crazytome.woff'
const Typography = createGlobalStyle`
  @font-face {
    font-family: SirBranches;
    src: url(${sirBranchesFont});
  }
  @font-face {
    font-family: CrazyTome;
    src: url(${crazyTomeFont});
  }
  html {
    color: var(--black);
    font-family: CrazyTome, Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6 {
    color: var(--darkred);
    font-family: SirBranches, sans-serif;
    margin: 0;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    border-bottom: 2px solid #c9ad6a;
  }
  h3 {
    font-size: 1.6rem;
    border-bottom: 2px solid #c9ad6a;
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
    margin: 0;
    &:not(:first-of-type) {
      text-indent: 2.4rem;
    }
  }
  .text-center {
    text-align: center;
  }
`

export default Typography
