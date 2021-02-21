import { createGlobalStyle } from 'styled-components'
import { Responsive } from './Responsive'
import bg from '../assets/images/backgrounds/pb-tiling-dark.jpg'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --blue: #001e9d;
    --darkgrey: #4E4E4E;
    --darkred: #58170d;
    --fontblack: #2E2E2E;
    --gold: #c9ad6a;
    --grey: #cfcfcf;
    --red: #9d0a0e;
    --white: #fff;
  }
  html{
    background: var(--fontblack);
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
  .page {
    background-image: url(${bg});
    box-shadow: 1rem 1rem 1rem var(--black);
    columns: 1;
    padding: 2.5rem 4rem 4rem;
    margin-top: 2rem;
    border-radius: 0.2rem;
    height: auto;    
  }
`

export default GlobalStyles
