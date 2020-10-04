import React from "react";
import styled from "styled-components";

const Container = styled.span`
  transform: rotate(270deg);
  ${({ theme }) => theme.copyrightText};
  position: fixed;
  top: 25rem;
  right: -7rem;
  z-index: 50;
  @media screen and (max-width: 1024px) {
    right: -9rem;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Copyright = ({ id }) => {
  return <Container id={id}>&copy;2020. Seung Ju PortFolio All rights reserved.</Container>;
};

export default Copyright;
