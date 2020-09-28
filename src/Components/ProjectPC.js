import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`overflow: hidden;`;

const Container = styled.div`
  position: relative;
  width: 76%;
  height: 80rem;
  margin-bottom: 4.5rem;
  > a {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 2.5rem;
    padding-bottom: 2rem;
    ${({ theme }) => theme.transition};
  }
  &:hover {
    > a {
      transform: scale(.95);
    }
  }
`;

const ThumbContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`;

const Thumb = styled.img`
  width: 100%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 1rem;
  bottom: 0;
  margin: auto 0;
  ${({ theme }) => theme.transition};
`;

const MetaContainer = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: left;
  display: flex;
  align-items: center;
  bottom: 5rem;
  &::before {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    background-color: ${({ theme }) => theme.darkGreyColor};
    margin-right: 2rem;
  }
`;

const Meta = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.blackColor};
  margin-right: 4rem;
`;

const Caption = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const ProjectPC = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Container>
        <Link to="/">
          <ThumbContainer src="http://placehold.it/720x480">
            <Thumb src="http://placehold.it/550x348" />
          </ThumbContainer>
          <MetaContainer>
            <Meta>Category / PROJECT</Meta>
          </MetaContainer>
          <TitleContainer>
            <Title>Project</Title>
            <Caption>Project Caption</Caption>
          </TitleContainer>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default ProjectPC;
