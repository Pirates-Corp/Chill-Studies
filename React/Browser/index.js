import React from 'react'
import ReactDOM from 'react-dom';
import App from '../Shared/App'
import { ThemeProvider} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../Shared/theme'
import { BrowserRouter } from "react-router-dom";


function Main() {
  return(     
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <App/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

ReactDOM.hydrate(
   <Main/>,
    document.getElementById('root')
)