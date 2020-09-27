import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import GlobalStyles from "../Styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./Header";
import MenuButton from "./MenuButton";
import Copyright from "./Copyright";

const RootWrapper = styled.div``;

const Wrapper = styled.div``;

export default () => {
  const [darkmode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const onToggleDarkmode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener(
        "change",
        event => (event.matches ? setDarkMode(true) : setDarkMode(false))
      );
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Facebook</title>
      </Helmet>
      <RootWrapper>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header onToggleDarkmode={onToggleDarkmode} />
            <MenuButton />
            <Copyright />
            <Routes darkmode={darkmode} />
          </Wrapper>
        </Router>
      </RootWrapper>
    </ThemeProvider>
  );
};
