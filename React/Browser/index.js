import React from "react";
import ReactDOM from "react-dom";
import App from "../Shared/Components/App";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../Shared/Components/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../Shared/Data/reducer";

const store = createStore(reducer);

function Main() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.hydrate(<Main />, document.getElementById("root"));
