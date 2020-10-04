import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Prismabook, Favicon, Github, GooglePlus, Instagram } from "./Icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 12.5rem 24rem;
  z-index: 30;
  @media screen and (max-width: 768px) {
    padding: 12.5rem 0;
    align-items: center;
  }
`;

const GlobalNavigationBar = styled.ul`
  position: relative;
  z-index: 10;
`;

const Navigation = styled.li`
  font-size: 8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.blackColor};
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
  ${({ theme }) => theme.transition};
  &:not(:hover) {
    opacity: .5;
  }
  a {
    position: relative;
    &:hover {
      &::after {
        width: 100%;
      }
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      ${({ theme }) => theme.transition};
      height: .6rem;
      top: 1rem;
      bottom: 0;
      left: 0;
      margin: auto 0;
      background-color: ${({ theme }) => theme.blackColor};
    }
  }
`;

const SocialContainer = styled.ul`
  display: flex;
  position: relative;
  z-index: 10;
`;

const Social = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SocialLink = styled.a``;

const Shadow = styled.div`
  width: 60rem;
  height: 60rem;
  opacity: .05;
  position: absolute;
  bottom: 20%;
  right: 5%;
  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }
  @media screen and (max-width: 425px) {
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 95vw;
    height: 95vw;
  }
`;

const Menu = () => {
  return (
    <Container>
      <GlobalNavigationBar>
        <Navigation>
          <Link to="/">Home</Link>
        </Navigation>
        <Navigation>
          <Link to="/works">Works</Link>
        </Navigation>
        <Navigation>
          <Link to="/about">About</Link>
        </Navigation>
        <Navigation>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </GlobalNavigationBar>
      <SocialContainer>
        <Social>
          <SocialLink href="https://github.com/kingsky32" target="_blank">
            <Github />
          </SocialLink>
        </Social>
        <Social>
          <SocialLink
            href="https://www.facebook.com/profile.php?id=100004252961772"
            target="_blank"
          >
            <Prismabook />
          </SocialLink>
        </Social>
        <Social>
          <SocialLink href="https://www.instagram.com/kingsky32/" target="_blank">
            <Instagram />
          </SocialLink>
        </Social>
        <Social>
          <SocialLink href="mailto:kingsky32@gmail.com">
            <GooglePlus />
          </SocialLink>
        </Social>
      </SocialContainer>
      <Shadow>
        <Favicon />
      </Shadow>
    </Container>
  );
};

export default Menu;
