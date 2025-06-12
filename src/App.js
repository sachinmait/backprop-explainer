import React, { Component } from "react";
import ReactGa from "react-ga";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Article } from "./components/exports";

const globalWeight = 350;
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h1: { fontWeight: globalWeight },
      h2: { fontWeight: globalWeight },
      h3: { marginTop: 25, fontWeight: globalWeight },
      h4: { marginTop: 20, marginBottom: 10, fontWeight: globalWeight },
      h5: { fontWeight: globalWeight },
      h6: { fontWeight: globalWeight },
      body1: { fontWeight: globalWeight },
      body2: { fontWeight: globalWeight },
    },
  },
});

class App extends Component {
  componentDidMount() {
    ReactGa.initialize(`${process.env.REACT_APP_GAID}`);
    ReactGa.pageview("/");
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Article />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
  }
}

export default App;
