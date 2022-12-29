import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['base-background']};
    color: ${props => props.theme};
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font: 400 1rem Nunito, sans-serif;
    line-height: 1.6;
  }
`