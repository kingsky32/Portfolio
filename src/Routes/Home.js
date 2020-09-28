import React from "react";
import styled from "styled-components";
import { Logo } from "../Components/Icons";
import ProjectPC from "../Components/ProjectPC";
import SubTitle from "../Components/SubTitle";
import Contact from "../Components/Contact";

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
  margin: 1.5rem 0;
`;

const MetaContent = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightGreyColor};
`;

const WorksSubTitle = styled(SubTitle)`
  margin-left: 30%;
  margin-bottom: 3.5rem;
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

const MoreSubTitle = styled(SubTitle)`margin: 0 auto 20rem;`;

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <Logo />
        <MetaTitle>Design + Front-end + Back-end</MetaTitle>
        <MetaContent>‘Seung Ju’ is creative design and developer.</MetaContent>
      </TitleContainer>
      <WorksSubTitle text="Works" url="/works" />
      <WorksContainer>
        <Work />
        <Work />
        <Work />
        <Work />
      </WorksContainer>
      <MoreSubTitle text="MORE" url="/works" />
      <Contact />
    </Container>
  );
};

export default Home;
