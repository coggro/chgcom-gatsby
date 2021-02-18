import { createGlobalStyle } from 'styled-components'
import { Responsive } from './Responsive'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --blue: #001e9d;
    --darkgrey: #4E4E4E;
    --white: #fff;
    --grey: #cfcfcf;
  }
  html{
    overflow-y: scroll;
  }
  body #___gatsby #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
      flex: 1;
      padding-bottom: 4.8rem;
    }
  }
  .container {
    box-sizing: border-box;
    margin: auto;
    padding: 0 2rem;
    width: 100%;
    max-width: 100%;
    @media (${Responsive.device.sm}) {
      max-width: 540px;
      padding: 0;
    }
    @media (${Responsive.device.md}) {
      max-width: 600px;
    }
    @media (${Responsive.device.lg}) {
      max-width: 660px;
    }
    @media (${Responsive.device.xl}) {
      max-width: 720px;
    }
    @media (${Responsive.device.xxl}) {
      max-width: 780px;
    }
    .container-fluid {
      width: 100%;
    }
  }
`

export default GlobalStyles
