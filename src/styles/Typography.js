import { createGlobalStyle } from 'styled-components'
import sirBranchesFont from '../assets/fonts/ddfonts/sirbranches-Small-Caps.woff'
import crazyTomeFont from '../assets/fonts/ddfonts/crazytome.woff'
const Typography = createGlobalStyle`
  @font-face {
    font-family: SirBranches;
    src: url(${sirBranchesFont});
    font-display: swap;
  }
  @font-face {
    font-family: CrazyTome;
    src: url(${crazyTomeFont});
    font-display: swap;
  }
  html {
    color: var(--fontblack);
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
    border-bottom: 2px solid var(--gold);
  }
  h3 {
    font-size: 1.6rem;
    border-bottom: 2px solid var(--gold);
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
    color: var(--fontblack);
    text-decoration: none;

    &:hover {
      color: var(--darkgrey);
      text-decoration: underline;
      text-decoration-color: var(--red);
    }

    &.always-under {
      text-decoration: underline;
      text-decoration-color: var(--red);
    }
  }
  main a {
    text-decoration: underline;
    text-decoration-color: var(--red);
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
  .visually-hidden {
    display: none;
  }
`

export default Typography
