import React from "react";
import { useSelector } from "react-redux";
import { StyledButton } from "../styles/Button.styled";

const Pagination = ({ paginate }) => {
  const todosPerPage = useSelector((state) => state.todos.todosPerPage);
  const currentPage = useSelector((state) => state.todos.currentPage);

  const todos = useSelector((state) => state.todos.todoArray);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((num) => {
    return (
      <StyledButton onClick={() => paginate(num)} key={num}>
        {num}
      </StyledButton>
    );
  });

  return <div>{pages}</div>;
};

export default Pagination;
