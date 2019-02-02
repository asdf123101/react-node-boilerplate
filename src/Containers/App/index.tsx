import React, { Component, Fragment } from 'react'

import Intro from '../../Components/Intro'
import { theme, ThemeProvider } from '../../theme'
import List from '../List'
import GlobalStyles from './globalStyles'

import 'normalize.css'

class App extends Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Intro />
          <List />
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default App
