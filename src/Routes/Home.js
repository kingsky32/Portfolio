import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainProjectPC from "../Components/MainProjectPC";
import SubTitle from "../Components/SubTitle";
import Contact from "../Components/Contact";
import { Power1, TweenLite } from "gsap";
import LogoAnimation from "../Components/LogoAnimation";
import ScrollTrigger from "react-scroll-trigger";
import { mainWorks } from "../works";
import MainProjectApp from "../Components/MainProjectApp";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const TitleContainer = styled.div`
  padding-top: 35vh;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 10% 15rem;
  svg {
    width: 20rem;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 25vh;
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

const WorkPC = styled(MainProjectPC)`
  display: flex;
  justify-content: flex-end;
`;

const WorkApp = styled(MainProjectApp)`
  display: flex;
  justify-content: flex-end;
`;

const WorksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
  > div {
    &:nth-child(2n) {
      ${WorkPC},
      ${WorkApp} {
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
    if(!sessionStorage.getItem("first-visit") || sessionStorage.getItem("first-visit") === null) {
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
        TweenLite.fromTo("#st1, #wk1", {
          duration,
          opacity: 0,
          translateY: "5rem",
          ease: Power1
        }, {
          duration,
          opacity: 1,
          translateY: "0",
          ease: Power1
        });
      }, 6750)
    } else {
      setLoading(prev => !prev);
    }
    setTimeout(() => sessionStorage.setItem("first-visit", true), 50);
  }, []);

  const onEnterViewport = e => {
    TweenLite.fromTo(e, {
      duration,
      opacity: 0,
      translateY: "5rem",
      ease: Power1
    }, {
      duration,
      opacity: 1,
      translateY: "0",
      ease: Power1
    });
  };

  return (
    <Container>
      <TitleContainer>
        <LogoAnimation />
        <MetaTitle id="mt">Design + Front-end + Back-end</MetaTitle>
        <MetaContent id="mc">‘Seung Ju’ is creative designer and developer.</MetaContent>
      </TitleContainer>
      {loading && <>
        <WorksSubTitle id="st1" text="Works" url="/works" />
        <WorksContainer>
          {mainWorks && mainWorks.map((work, idx) =>
          <ScrollTrigger key={idx} onEnter={() => onEnterViewport(`#wk${idx + 1}`)}>
            {work.type === "web" ?
              <WorkPC
                {...work}
                id={`wk${idx + 1}`}
              />
              : work.type === "app" &&
              <WorkApp
                {...work} 
                id={`wk${idx + 1}`}
              />
            }
          </ScrollTrigger>)}
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
