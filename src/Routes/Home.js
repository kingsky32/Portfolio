import React, { useEffect, useState } from "react";
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
import ScrollTrigger from "react-scroll-trigger";

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

const Work = styled(ProjectPC)`
  display: flex;
  justify-content: flex-end;
`;

const WorksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
  > div {
    &:nth-child(2n) {
      ${Work} {
        justify-content: flex-start;
      }
    }
    &:not(:last-child) {
      margin-bottom: 20rem;
    }
  }
`;

const MoreSubTitle = styled(SubTitle)`
  margin: 0 auto 20rem;
`;

const Home = () => {
  const duration = 0.3;
  const [loading, setLoading] = useState(false);
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
    setTimeout(() => {
      setLoading(prev => !prev)
      TweenLite.from("#st1, #wk1", {
        duration,
        opacity: 0,
        translateY: "5rem",
        ease: Power1
      });
    }, 6750)
  }, []);

  const onEnterViewport = e => {
    TweenLite.from(e, {
      duration,
      opacity: 0,
      translateY: "5rem"
    });
  };

  return (
    <Container>
      <TitleContainer>
        <LogoAnimation />
        <MetaTitle id="mt">Design + Front-end + Back-end</MetaTitle>
        <MetaContent id="mc">‘Seung Ju’ is creative design and developer.</MetaContent>
      </TitleContainer>
      {loading && <>
        <WorksSubTitle id="st1" text="Works" url="/works" />
        <WorksContainer>
          <div>
            <Work
              id="wk1"
              background={BackgroundGradient1}
              thumb="http://placehold.it/550x348"
              project="Project"
              caption="Project Caption"
            />
          </div>
          <ScrollTrigger onEnter={() => onEnterViewport("#wk2")}>
            <Work
              id="wk2"
              background={BackgroundGradient2}
              thumb="http://placehold.it/550x348"
              project="Project"
              caption="Project Caption"
            />
          </ScrollTrigger>
          <ScrollTrigger onEnter={() => onEnterViewport("#wk3")}>
            <Work
              id="wk3"
              background={BackgroundGradient3}
              thumb="http://placehold.it/550x348"
              project="Project"
              caption="Project Caption"
            />
          </ScrollTrigger>
          <ScrollTrigger onEnter={() => onEnterViewport("#wk4")}>
            <Work
              id="wk4"
              background={BackgroundGradient4}
              thumb="http://placehold.it/550x348"
              project="Project"
              caption="Project Caption"
            />
          </ScrollTrigger>
        </WorksContainer>
        <ScrollTrigger onEnter={() => onEnterViewport("#st2")}>
          <MoreSubTitle id="st2" text="MORE" url="/works" />
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => onEnterViewport("#ct")}>
          <Contact id="ct" />
        </ScrollTrigger>
      </>}
    </Container>
  );
};

export default Home;
