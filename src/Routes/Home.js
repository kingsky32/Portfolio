import React from "react";
import styled from "styled-components";
import { Logo } from "../Components/Icons";
import ProjectPC from "../Components/ProjectPC";
import SubTitle from "../Components/SubTitle";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  padding-top: 50vh;
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
`;

const Work = styled.div`
  display: flex;
  justify-content: flex-end;
  &:not(:last-child) {
    margin-bottom: 20rem;
  }
  &:nth-child(2n) {
    justify-content: flex-start;
  }
`;

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <Logo />
        <MetaTitle>Design + Front-end + Back-end</MetaTitle>
        <MetaContent>‘Seung Ju’ is creative design and developer.</MetaContent>
      </TitleContainer>
      <WorksSubTitle text="Works" />
      <WorksContainer>
        <Work>
          <ProjectPC />
        </Work>
        <Work>
          <ProjectPC />
        </Work>
        <Work>
          <ProjectPC />
        </Work>
        <Work>
          <ProjectPC />
        </Work>
      </WorksContainer>
    </Container>
  );
};

export default Home;
