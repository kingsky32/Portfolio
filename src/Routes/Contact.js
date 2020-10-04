import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 5.8rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
`;

const SubTitle = styled.h5`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 5rem;
  line-height: 1.8;
`;

const FormContainer = styled.form`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    flex-flow: column nowrap;
  }
`;

const Label = styled.label`
  width: 15rem;
  font-size: 1.5rem;
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  flex: 1;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  flex: 1;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Submit = styled(Button)`
  align-self: flex-end;
`;

const Contact = () => {
  const name = useInput();
  const email = useInput();
  const phone = useInput();
  const content = useInput();

  const onSubmit = e => {
    e.preventDefault();
    // TODO SendMail
  };

  return (
    <Container>
      <Helmet>
        <title>Seung Ju | Contact</title>
      </Helmet>
      <Title>Contact</Title>
      <SubTitle>
        Thank you for visiting Seung ju's website.<br />
        Please feel free to contact me if you have any questions
      </SubTitle>
      <FormContainer onSubmit={onSubmit}>
        <FormRow>
          <Label htmlFor="name">Name*</Label>
          <Input
            id="name"
            type="text"
            value={name.value}
            onChange={name.onChange}
            placeholder="Name"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            type="text"
            value={email.value}
            onChange={email.onChange}
            placeholder="Email"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="text"
            value={phone.value}
            onChange={phone.onChange}
            placeholder="Phone"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="content">Content*</Label>
          <Textarea
            id="content"
            type="text"
            value={content.value}
            rows="7"
            onChange={content.onChange}
            placeholder="Content"
          />
        </FormRow>
        <Submit text="Submit" type="submit" />
      </FormContainer>
    </Container>
  );
};

export default Contact;
