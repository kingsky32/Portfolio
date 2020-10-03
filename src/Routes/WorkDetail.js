import React from "react";
import styled from "styled-components";
import { FirebaseIcon, Graphql, PrismaIcon, ReactIcon } from "../Components/Icons";
import SubTitle from "../Components/SubTitle";
import MainProjectPC from "../Components/MainProjectPC";
import { works } from "../works";
import MockupApp from "../Assets/mockup/mobile-mockup.png";
import MainProjectApp from "../Components/MainProjectApp";

const Container = styled.div``;

const ProjectSubTitle = styled(SubTitle)`margin: 35vh 0 5rem 10%;`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin-bottom: 35rem;
`;

const ThumbContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`;

const Thumb = styled.div`
  width: 100%;
  max-width: 105rem;
  height: 60rem;
  border-radius: 10px;
  position: absolute;
  background: #ffffff20;
  top: 0;
  right: 1rem;
  bottom: 3rem;
  margin: auto 0;
`;

const ThumbVideo = styled.video`
  width: 100%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 3rem;
  right: 1rem;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
  ${({ theme }) => theme.transition};
`;

const ThumbApp = styled.div`
  width: 80%;
  max-width: 30rem;
  height: 65rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    opacity: .2;
    background-image: url(${MockupApp});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const ThumbAppVideo = styled.video`
  width: 96%;
  height: 90%;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
  ${({ theme }) => theme.transition};
  z-index: 5;
`;

const InfoContainer = styled.div`padding: 0 8%;`;

const InfoTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightGreyColor};
  margin-bottom: 1.5rem;
`;

const MetaContainer = styled.ul`
  padding-left: 1rem;
  margin-bottom: 3rem;
`;

const Meta = styled.li`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.blackColor};
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Tools = styled.ul`
  display: flex;
  margin-bottom: 5rem;
`;

const Tool = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.transition};
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const NextProject = styled(MainProjectPC)`
  display: flex;
  justify-content: center;
`;

const NextProjectApp = styled(MainProjectApp)`
  display: flex;
  justify-content: center;
`;

const LinkContainer = styled.div``;

const Link = styled.a`
  display: block;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.blackColor};
  padding-top: 1rem;
  text-indent: 1rem;
  opacity: .5;
  ${({ theme }) => theme.transition};
  &:hover {
    opacity: 1;
  }
  &::after {
    margin-top: 1rem;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.blackColor};
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const WorkDetail = ({ match: { params: { id } } }) => {
  const [work] = works.filter(e => e.pid === id);
  const [nextWork] = works.filter(e => e.id === work.id + 1);
  const tools = tool => {
    switch (tool) {
      case "React":
        return (
          <Tool>
            <ReactIcon />
          </Tool>
        );
      case "GraphQL":
        return (
          <Tool>
            <Graphql />
          </Tool>
        );
      case "Prisma":
        return (
          <Tool>
            <PrismaIcon />
          </Tool>
        );
      case "Firebase":
        return (
          <Tool>
            <FirebaseIcon />
          </Tool>
        );
      default:
        return null;
    }
  };
  return (
    <Container>
      <ProjectSubTitle text={work.project} />
      <ProjectContainer>
        <ThumbContainer src={work.background}>
          {work.type === "web"
            ? <Thumb>
                <ThumbVideo autoPlay loop muted poster={work.thumb}>
                  <source src={work.thumb} />
                </ThumbVideo>
              </Thumb>
            : <ThumbApp>
                <ThumbAppVideo autoPlay loop muted poster={work.thumb}>
                  <source src={work.thumb} />
                </ThumbAppVideo>
              </ThumbApp>}
        </ThumbContainer>
        <InfoContainer>
          <InfoTitle>PROJECT</InfoTitle>
          <MetaContainer>
            {work.meta.map((meta, idx) =>
              <Meta key={idx}>
                {meta}
              </Meta>
            )}
          </MetaContainer>
          <Tools>
            {work.tools.map(tool => tools(tool))}
          </Tools>
          <LinkContainer>
            {work.page &&
              <Link href={work.page} target="_blank">
                Visit Page
              </Link>}
            {work.github &&
              <Link href={work.github} target="_blank">
                Visit Github
              </Link>}
          </LinkContainer>
        </InfoContainer>
      </ProjectContainer>
      {nextWork &&
        (nextWork.type === "web"
          ? <NextProject {...nextWork} />
          : <NextProjectApp {...nextWork} />)}
    </Container>
  );
};

export default WorkDetail;
