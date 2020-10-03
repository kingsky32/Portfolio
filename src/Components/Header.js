import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Favicon, Moon } from "./Icons";

const Container = styled.header`
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3rem 0;
  position: fixed;
  top: 0;
  left: 5rem;
  z-index: 50;
`;

const LogoContainer = styled.h1`
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.1rem;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const ScrollLineContainer = styled.div`
  width: 1px;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.blackColor}15;
  margin-bottom: 3rem;
`;

const ScrollLine = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${({ scrollValue }) => scrollValue}%;
  ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.blackColor};
`;

const DarkButton = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 3.4rem;
  padding: .8rem;
  background-color: ${({ theme }) => theme.blackColor};
  svg {
    fill: ${({ theme }) => theme.whiteColor};
  }
`;

const Header = ({ id, onToggleDarkmode, history }) => {
  const [scrollValue, setScrollValue] = useState(-100);

  const getScrollValue = () => {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    const scrollWidth = -(scrollPosition / (windowHeight - fullHeight) * 100 + 100);
    if (scrollPosition + windowHeight >= fullHeight) setScrollValue(0);
    else setScrollValue(scrollWidth);
  };

  useEffect(() => {
    getScrollValue();
    window.addEventListener("scroll", getScrollValue);
  }, []);

  useEffect(
    () =>
      history.listen(() => {
        setTimeout(getScrollValue, 600);
      }),
    [history]
  );

  return (
    <Container id={id}>
      <LogoContainer>
        <Link to="/">
          <Favicon />
        </Link>
      </LogoContainer>
      <ScrollLineContainer>
        <ScrollLine scrollValue={scrollValue} />
      </ScrollLineContainer>
      <DarkButton onClick={onToggleDarkmode}>
        <Moon size="1.8rem" />
      </DarkButton>
    </Container>
  );
};

export default withRouter(Header);
