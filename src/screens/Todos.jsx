import React from "react";
import TodolistInput from "../components/Todo/TodolistInput";
import Navbar from "../components/navbar/Navbar";
import Todolist from "../components/Todo/Todolist";
import { Container } from "../components/styles/Container.styled";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../redux/slices/todoSlice";

const Todos = () => {




  return (
    <>
      <Navbar />
      <Container>
        <TodolistInput />
        <Todolist />
      </Container>
    </>
  );
};

export default Todos;
