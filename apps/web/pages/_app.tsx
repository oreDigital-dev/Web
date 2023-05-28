import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store";
import "../src/styles/global.css";
import BaseLayout from "../src/layout/baselayout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
  );
}

export default MyApp;
