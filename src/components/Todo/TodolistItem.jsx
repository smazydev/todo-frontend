import React from "react";
import {
  StyledTodoItem,
  ItemInfo,
  TodoItemDescription,
} from "../styles/TodolistItem.styled";
// import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";
//import { BsPencil } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { markCompleted, deleteTodo, editTodo } from "../../redux/slices/todoSlice";
import { ButtonGroup } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";

const TodolistItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const style = {
    color: `white`,
    borderColor: "white",
    fontSize: "1.2em",
  };

  const markComplete = (id) => {
    dispatch(markCompleted(id));
  };

  const deleteTodoById = (id) => {
    dispatch(deleteTodo(id));
  };

  const updateTodo = (id) => {
    dispatch(editTodo(id));
    navigate("/todos/edit");
  };

  return (
    <StyledTodoItem>
      <ItemInfo>
        <span onClick={() => markComplete(props.id)}>
          {/* {props.completed ? (
            <FaRegCheckCircle style={style} />
          ) : (
            <FaRegCircle style={style} />
          )} */}
        </span>
        {}
        <TodoItemDescription completed={props.completed}>
          {props.title}
        </TodoItemDescription>
      </ItemInfo>
      <ButtonGroup>
        {/* <BsPencil
          id={props.id}
          style={{ color: "white", fontSize: "20px",marginRight:"5px" }}
          onClick={() => updateTodo(props.id)}
        />
        <MdDeleteOutline
          id={props.id}
          style={{ color: "white", fontSize: "25px" }}
          onClick={() => deleteTodoById(props.id)}
        /> */}
      </ButtonGroup>
    </StyledTodoItem>
  );
};

export default TodolistItem;
