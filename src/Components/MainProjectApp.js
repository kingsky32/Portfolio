import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MockupApp from "../Assets/mockup/mobile-mockup.png";

const Wrapper = styled.div`overflow: hidden;`;

const Container = styled.div`
  position: relative;
  width: 76%;
  height: 80rem;
  margin-bottom: 4.5rem;
  margin-left: .5rem;
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
  @media screen and (max-width: 1920px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 60rem;
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

const Thumb = styled.div`
  width: 80%;
  max-width: 30rem;
  height: 65rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 2rem;
  bottom: 3rem;
  margin: auto 0;
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
  @media screen and (max-width: 1440px) {
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 23rem;
    height: 50rem;
  }
`;

const ThumbVideo = styled.video`
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
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const MainProjectApp = ({ id, className, background, thumb, project, caption, category, pid }) => {
  return (
    <Wrapper id={id} className={className}>
      <Container>
        <Link to={`/works/${pid}`}>
          <ThumbContainer src={background}>
            <Thumb>
              <ThumbVideo autoPlay loop muted poster={thumb}>
                <source src={thumb} />
              </ThumbVideo>
            </Thumb>
          </ThumbContainer>
          <MetaContainer>
            <Meta>
              {category}
            </Meta>
          </MetaContainer>
          <TitleContainer>
            <Title>
              {project}
            </Title>
            <Caption>
              {caption}
            </Caption>
          </TitleContainer>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default MainProjectApp;
