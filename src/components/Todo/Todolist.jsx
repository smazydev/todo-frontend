import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../../redux/slices/todoSlice";
import Pagination from "../pagination/Pagination";
import { TodoListWrapper } from "../styles/TodoList.styled";
import TodolistItem from "./TodolistItem";

const Todolist = () => {
  const todoListArr = useSelector((state) => state.todos.todoArray);
  const currentPage = useSelector((state) => state.todos.currentPage);
  const todosPerPage = useSelector((state) => state.todos.todosPerPage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("inside todos aftereffet")
    dispatch(fetchTodos({currentPage,todosPerPage}))
  },[currentPage])

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const todoArr = todoListArr.slice(indexOfFirstTodo, indexOfLastTodo);

  const todos = todoArr.map(({ id, title, completed }) => {
    return <TodolistItem id={id} title={title} completed={completed} />;
  });

  const paginate = (pagenumber) => {
    dispatch(changeCurrentPage(pagenumber));
  };

  return (
    <TodoListWrapper>
      {todos}
      <Pagination paginate={paginate} />
    </TodoListWrapper>
  );
};

export default Todolist;
