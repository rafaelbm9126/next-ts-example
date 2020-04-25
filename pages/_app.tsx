import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Head from "next/head";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/store";
import { Loading } from "../components/Loading";

import "antd/dist/antd.css";
import "@assets/index.css";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #000;
    }
`;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Sheldon App</title>
      </Head>
      <Provider store={store}>
        <Loading />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
