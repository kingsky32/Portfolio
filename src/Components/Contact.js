import React from "react";
import styled from "styled-components";
import { Call, Prismabook, Github, Instagram, Mail } from "./Icons";
import SubTitle from "./SubTitle";

const Container = styled.div`
  width: 60rem;
  margin: 0 auto;
`;

const Contacts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  height: 2rem;
  &:not(:last-child):not(:nth-last-child(2)) {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.div`margin-right: .5rem;`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const Contact = ({ icon, text }) =>
  <ContactContainer>
    <Icon>
      {icon}
    </Icon>
    <Text>
      {text}
    </Text>
  </ContactContainer>;

export default ({ id }) => {
  return (
    <Container id={id}>
      <SubTitle text="Contact" url="/contact" />
      <Contacts>
        <Contact icon={<Call size="1.6rem" />} text="010. 8327. 3235" />
        <Contact icon={<Instagram size="1.6rem" />} text="@kingsky32" />
        <Contact icon={<Mail size="1.6rem" />} text="kingsky32@gmail.com" />
        <Contact icon={<Github size="1.6rem" />} text="@kingsky32" />
        <Contact icon={<Prismabook size="1.6rem" />} text="@kingsky32" />
      </Contacts>
    </Container>
  );
};
