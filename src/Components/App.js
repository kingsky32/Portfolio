import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import GlobalStyles from "../Styles/GlobalStyles";
import { Helmet } from "react-helmet";

const RootWrapper = styled.div``;

const Wrapper = styled.div``;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Facebook</title>
      </Helmet>
      <RootWrapper>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Routes />
          </Wrapper>
        </Router>
      </RootWrapper>
    </ThemeProvider>
  );
};
