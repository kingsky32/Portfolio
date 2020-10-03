import React from "react";
import styled from "styled-components";
import MainProjectApp from "../Components/MainProjectApp";
import MainProjectPC from "../Components/MainProjectPC";
import { mainWorks } from "../works";

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

const MainWorkApp = styled(MainProjectApp)`
  display: flex;
  justify-content: flex-end;
  &:not(:last-child) {
    margin-bottom: 20rem;
  }
  &:nth-child(2n) {
    justify-content: flex-start;
  }
`;

const Works = () => {
  return (
    <Container>
      <MainWorksContainer>
        {mainWorks &&
          mainWorks.map((work, idx) => {
            return work.type === "web"
              ? <MainWork key={idx} id={`wk${idx + 1}`} {...work} />
              : work.type === "app" && <MainWorkApp key={idx} id={`wk${idx + 1}`} {...work} />;
          })}
      </MainWorksContainer>
    </Container>
  );
};

export default Works;
