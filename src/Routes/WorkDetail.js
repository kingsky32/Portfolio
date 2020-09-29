import React from "react";
import styled from "styled-components";
import { Graphql, ReactIcon } from "../Components/Icons";
import SubTitle from "../Components/SubTitle";
import BackgroundGradient from "../Assets/Background/background-gradient.png";
import MainProjectPC from "../Components/MainProjectPC";

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

const ThumbImg = styled.img`
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

const WorkDetail = () => {
  return (
    <Container>
      <ProjectSubTitle text="Project" />
      <ProjectContainer>
        <ThumbContainer src={BackgroundGradient}>
          <Thumb>
            <ThumbImg src="http://placehold.it/550x348" />
          </Thumb>
        </ThumbContainer>
        <InfoContainer>
          <InfoTitle>PROJECT</InfoTitle>
          <MetaContainer>
            <Meta>November 2020 (2 weeks)</Meta>
            <Meta>Design & Develop</Meta>
          </MetaContainer>
          <Tools>
            <Tool>
              <ReactIcon />
            </Tool>
            <Tool>
              <Graphql />
            </Tool>
          </Tools>
          <LinkContainer>
            <Link href="">Visit Page</Link>
            <Link href="">Visit Github</Link>
          </LinkContainer>
        </InfoContainer>
      </ProjectContainer>
      <NextProject
        background={BackgroundGradient}
        thumb="http://placehold.it/550x348"
        project="Project"
        caption="Project Caption"
      />
    </Container>
  );
};

export default WorkDetail;
