import React from "react";
import styled from "styled-components";
import MainProjectPC from "../Components/MainProjectPC";
import ProjectPC from "../Components/ProjectPC";
import BackgroundGradient1 from "../Assets/Background/background-gradient.png";
import BackgroundGradient2 from "../Assets/Background/background-gradient-2.png";
import BackgroundGradient3 from "../Assets/Background/background-gradient-3.png";
import BackgroundGradient4 from "../Assets/Background/background-gradient-4.png";
import BackgroundGradient5 from "../Assets/Background/background-gradient-5.png";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MainWorksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20rem;
`;

const MainWork = styled(MainProjectPC)`
  display: flex;
  justify-content: flex-end;
  &:not(:last-child) {
    margin-bottom: 20rem;
  }
  &:nth-child(2n) {
    justify-content: flex-start;
  }
`;

const SubWorksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const SubWork = styled(ProjectPC)`
  flex: 3 0 50%;
  &:nth-child(2n + 1) {
    margin-right: 2.5rem;
  }
  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(5) {
    flex: 1 0 30%;
  }
  &:not(:last-child):not(:nth-last-child(2)) {
    margin-bottom: 3.5rem;
  }
`;

const Works = () => {
  return (
    <Container>
      <MainWorksContainer>
        <MainWork
          background={BackgroundGradient1}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <MainWork
          background={BackgroundGradient2}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <MainWork
          background={BackgroundGradient3}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
        <MainWork
          background={BackgroundGradient4}
          thumb="http://placehold.it/550x348"
          project="Project"
          caption="Project Caption"
        />
      </MainWorksContainer>
      <SubWorksContainer>
        <SubWork
          background={BackgroundGradient1}
          thumb="http://placehold.it/550x348"
          project="project"
        />
        <SubWork
          background={BackgroundGradient2}
          thumb="http://placehold.it/550x348"
          project="project"
        />
        <SubWork
          background={BackgroundGradient3}
          thumb="http://placehold.it/550x348"
          project="project"
        />
        <SubWork
          background={BackgroundGradient4}
          thumb="http://placehold.it/550x348"
          project="project"
        />
        <SubWork
          background={BackgroundGradient5}
          thumb="http://placehold.it/550x348"
          project="project"
        />
        <SubWork
          background={BackgroundGradient1}
          thumb="http://placehold.it/550x348"
          project="project"
        />
      </SubWorksContainer>
    </Container>
  );
};

export default Works;
