import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body #___gatsby #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
      flex: 1;
    }
  }
`

export default GlobalStyles
