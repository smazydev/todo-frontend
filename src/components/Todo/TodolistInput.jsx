import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledInput } from "../styles/Input.styled";
import { addTodo } from "../../redux/slices/todoSlice";

const TodolistInput = () => {
  const [todoTitle, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo({ id: "asdasdasd", title: todoTitle, completed: false }));
    }
  };

  return (
    <StyledInput
      placeholder="Create a todo..."
      onChange={handleOnChange}
      value={todoTitle}
      onKeyDown={handleEnterKeyPress}
    />
  );
};

export default TodolistInput;
