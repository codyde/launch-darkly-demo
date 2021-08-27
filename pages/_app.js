import "../styles/globals.css";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withLDProvider({
  // TODO: Sercret storage? Vault?
  clientSideID: "60d0e473e5577c0cf09d6ff5",
  // user: {
  //   key: "default",
  // },
  options: {
    bootstrap: "localStorage",
  },
})(MyApp);
