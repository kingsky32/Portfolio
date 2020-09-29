import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 78rem;
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
  width: 95%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 2.5rem;
  left: 0;
  right: 0;
  margin: auto;
  ${({ theme }) => theme.transition};
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: #ffffff;
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
`;

const ProjectPC = ({ className, background, thumb, project }) => {
  return (
    <Container className={className}>
      <Link to="/">
        <ThumbContainer src={background} alt={project}>
          <Thumb src={thumb} />
          <Title>
            {project}
          </Title>
        </ThumbContainer>
      </Link>
    </Container>
  );
};

export default ProjectPC;
