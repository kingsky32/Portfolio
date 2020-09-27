import React from "react";
import styled from "styled-components";

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.greyColor};
  text-indent: -999999px;
  position: absolute;
  transition: .25s top ease-out;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: .9rem;
  }
  &:nth-child(3) {
    top: 1.8rem;
  }
`;

const Container = styled.div`
  width: 5rem;
  height: 2.1rem;
  position: fixed;
  top: 5rem;
  right: 5rem;
  cursor: pointer;
  &:hover {
    height: 2.5rem;
    ${Line} {
      &:nth-child(1) {
        top: -.2rem;
      }
      &:nth-child(2) {
        top: .9rem;
      }
      &:nth-child(3) {
        top: 2rem;
      }
    }
  }
`;

const MenuButton = ({ onMenuClick, isOpenMenu }) => {
  return (
    <Container>
      <Line>1</Line>
      <Line>2</Line>
      <Line>3</Line>
    </Container>
  );
};

export default MenuButton;
