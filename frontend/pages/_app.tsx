import "../styles/globals.css";
import "macro-css";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}
export default MyApp;
