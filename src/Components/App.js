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
import Menu from "./Menu";

const RootWrapper = styled.div``;

const Wrapper = styled.div``;

export default () => {
  const [darkmode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onToggleDarkmode = () => setDarkMode(prev => !prev);

  const onToggleMenu = () => {
    setIsOpenMenu(prev => !prev);
  };

  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };

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
            <MenuButton isOpenMenu={isOpenMenu} onToggleMenu={onToggleMenu} />
            {isOpenMenu && <Menu />}
            <Copyright />
            <Routes onCloseMenu={onCloseMenu} darkmode={darkmode} />
          </Wrapper>
        </Router>
      </RootWrapper>
    </ThemeProvider>
  );
};
