import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.blackColor};
  &::after {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    background-color: ${({ theme }) => theme.blackColor};
    margin-left: 2rem;
  }
`;

const SubTitle = ({ className, text }) => {
  return (
    <Container className={className}>
      {text}
    </Container>
  );
};

export default SubTitle;
