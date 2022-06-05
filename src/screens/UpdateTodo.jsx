
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";
import { Container } from "../components/styles/Container.styled";
import { updateTodoTitle } from "../redux/slices/todoSlice";

const UpdateTodo = () => {

  const currentlyBeingEdited = useSelector((state) => state.todos.currentlyBeingEdited);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (form) => {
    console.log(form)
    dispatch(updateTodoTitle(form))
    navigate("/todos");
  }

  return (
    <>
      <Navbar />
      <Container>
        <Form
          title={"Update Todo"}
          formArr={[
            {
              label: "Todo Title",
              name: "title",
              type: "text",
              placeholder: "Update Todo Title",
              value: currentlyBeingEdited.title,
              todoId: currentlyBeingEdited.id,
            },
          ]}
          submitBtn={"Update Todo"}
          onSubmit={onSubmitHandler}
          redirect={null}
        />
      </Container>
    </>
  );
};

export default UpdateTodo;
