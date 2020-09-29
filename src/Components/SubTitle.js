import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: 14rem;
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

const SubTitle = ({ className, text, url }) => {
  return (
    <Container to={url} className={className}>
      {text}
    </Container>
  );
};

export default SubTitle;
