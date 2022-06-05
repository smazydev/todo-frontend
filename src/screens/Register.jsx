import React from "react";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";
import { Container } from "../components/styles/Container.styled";

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Form
          formArr={[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name...",
            },
            {
              label: "Email",
              name: "email",
              type: "text",
              placeholder: "Enter your email...",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Enter your password...",
            },
          ]}
          title={"Sign up"}
          onSubmit={() => {
            console.log("hello");
          }}
          submitBtn={"Sign up"}
          redirect={{
            label: "Already have an account?",
            link: {
              label: "Sign in",
              to: "/login",
            },
          }}
        />
      </Container>
    </>
  );
};

export default Register;
