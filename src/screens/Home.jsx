import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Container } from "../components/styles/Container.styled";
import { Title } from "../components/styles/Title.styled";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Todo Application</Title>
      </Container>
    </>
  );
};

export default Home;
