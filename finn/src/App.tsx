import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Theme, { ITheme } from './theme'
import Header from './components/header'
import Intro from './components/intro'
import Input from './components/input'
import SecondParagraph from './components/secondParagraph'
import Highlights from './components/highlights'
import Boost from './components/boost'

const GlobalStyle = createGlobalStyle <{ theme: ITheme }>`
  body {
    background-color: hsl(257, 7%, 90%);
  }
  @font-face {
    src: ${props => `url(${props.theme.font.url})`};
    font-family: ${props => `${props.theme.font.family}, sans-serif`};
    font-weight: ${props => props.theme.font.weight};
    font-size: ${props => props.theme.font.size};
  }
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Intro />
          <Input />
          <SecondParagraph />
          <Highlights />
          <Boost />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App