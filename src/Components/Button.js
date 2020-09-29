import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 1.2rem 1.8rem;
  background-color: ${({ theme }) => theme.blueColor};
  color: #ffffff;
  font-size: 1.43rem;
  border-radius: .4rem;
  ${({ theme }) => theme.transition};
  &:hover {
    background-color: ${({ theme }) => theme.blueHoverColor};
  }
`;

const Button = ({ className, text, type }) => {
  return (
    <Container className={className} type={type}>
      {text}
    </Container>
  );
};

export default Button;
