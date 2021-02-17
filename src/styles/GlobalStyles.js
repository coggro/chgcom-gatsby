import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --blue: #001e9d;
    --darkgrey: #4E4E4E;
    --white: #fff;
    --grey: #efefef;
  }
  body #___gatsby #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
      flex: 1;
    }
  }
  .container {
    box-sizing: border-box;
    margin: auto;
    padding: 0 1rem;
    width: 100%;
    max-width: 100%;
    @media (min-width: 576px) {
      max-width: 540px;
      padding: 0;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    @media (min-width: 1400px) {
      max-width: 1320px;
    }
    .container-fluid {
      width: 100%;
    }
  }
`

export default GlobalStyles
