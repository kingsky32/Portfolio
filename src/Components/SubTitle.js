import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 20rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.blackColor};
  &:hover::after {
    width: 12rem;
  }
  &::after {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    ${({ theme }) => theme.transition};
    background-color: ${({ theme }) => theme.blackColor};
    margin-left: 2rem;
  }
`;

const Container = styled.span`
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
  return url
    ? <LinkContainer to={url} className={className}>
        {text}
      </LinkContainer>
    : <Container className={className}>
        {text}
      </Container>;
};

export default SubTitle;
