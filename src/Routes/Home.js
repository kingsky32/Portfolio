import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectPC from "../Components/MainProjectPC";
import SubTitle from "../Components/SubTitle";
import Contact from "../Components/Contact";
import BackgroundGradient1 from "../Assets/Background/background-gradient.png";
import BackgroundGradient2 from "../Assets/Background/background-gradient-2.png";
import BackgroundGradient3 from "../Assets/Background/background-gradient-3.png";
import BackgroundGradient4 from "../Assets/Background/background-gradient-4.png";
import { Power1, TweenLite } from "gsap";
import LogoAnimation from "../Components/LogoAnimation";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  padding-top: 35vh;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 10% 15rem;
  svg {
    width: 20rem;
  }
`;

const MetaTitle = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.blackColor};
  height: 2rem;
  overflow: hidden;
  margin: 1rem 0;
`;

const MetaContent = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  height: 1.4rem;
  overflow: hidden;
  color: ${({ theme }) => theme.lightGreyColor};
`;

const WorksSubTitle = styled(SubTitle)`
  margin-left: 30%;
  margin-bottom: 3.5rem;
  position: relative;
`;

const WorksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
`;

const Work = styled(ProjectPC)`
  display: flex;
  justify-content: flex-end;
  &:not(:last-child) {
    margin-bottom: 20rem;
  }
  &:nth-child(2n) {
    justify-content: flex-start;
  }
`;

const MoreSubTitle = styled(SubTitle)`
  margin: 0 auto 20rem;
`;

const Home = () => {
  const duration = 0.3;
  useEffect(() => {
    TweenLite.fromTo(
      "#mt, #mc",
      { lineHeight: 5 },
      {
        delay: 6.25,
        duration,
        lineHeight: 1,
        ease: Power1
      }
    );
    TweenLite.fromTo(
      "#st1, #st2, #wk1, #wk2, #wk3, #wk4",
      {
        opacity: 0,
        translateY: "5rem"
      },
      {
        delay: 6.75,
        duration,
        opacity: 1,
        translateY: 0,
        ease: Power1
      }
    );
  }, []);
  return (
    <Container>
      <TitleContainer>
        <LogoAnimation />
        <MetaTitle id="mt">Design + Front-end + Back-end</MetaTitle>
        <MetaContent id="mc">‘Seung Ju’ is creative design and developer.</MetaContent>
      </TitleContainer>
      <WorksSubTitle id="st1" text="Works" url="/works" />
      <WorksContainer>
        <Work
          id="wk1"
          background={BackgroundGradient1}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <Work
          id="wk2"
          background={BackgroundGradient2}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <Work
          id="wk3"
          background={BackgroundGradient3}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <Work
          id="wk4"
          background={BackgroundGradient4}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
      </WorksContainer>
      <MoreSubTitle id="st2" text="MORE" url="/works" />
      <Contact />
    </Container>
  );
};

export default Home;
