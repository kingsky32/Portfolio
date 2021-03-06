import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import GlobalStyles from "../Styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./Header";
import MenuButton from "./MenuButton";
import Copyright from "./Copyright";
import Menu from "./Menu";
import { TweenLite } from "gsap/gsap-core";
import { Power1 } from "gsap/gsap-core";
import DarkTheme from "../Styles/DarkTheme";

const RootWrapper = styled.div``;

const Wrapper = styled.div`padding: 15rem 0;`;

export default () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const duration = 0.3;
  const onToggleDarkmode = () => setDarkMode(prev => !prev);

  const onToggleMenu = () => {
    setIsOpenMenu(prev => !prev);
  };

  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("first-visit") || sessionStorage.getItem("first-visit") === null) {
      TweenLite.from("#hd, #mu, #cr", {
        delay: 5.5,
        duration,
        opacity: 0,
        translateY: "2rem",
        ease: Power1
      });
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener(
        "change",
        event => (event.matches ? setDarkMode(true) : setDarkMode(false))
      );
  }, []);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : Theme}>
      <Helmet>
        <title>Seung Ju | Portfolio</title>
      </Helmet>
      <RootWrapper>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header id="hd" onToggleDarkmode={onToggleDarkmode} />
            <MenuButton id="mu" isOpenMenu={isOpenMenu} onToggleMenu={onToggleMenu} />
            <Copyright id="cr" />
            {isOpenMenu && <Menu />}
            <Routes onCloseMenu={onCloseMenu} darkMode={darkMode} />
          </Wrapper>
        </Router>
      </RootWrapper>
    </ThemeProvider>
  );
};
