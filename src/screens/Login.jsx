import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";
import { Container } from "../components/styles/Container.styled";
import { signIn } from "../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/todos");
    }
  }, [isAuthenticated]);

  const onSubmitHandler = (form) => {
    console.log(form);
    dispatch(signIn(form));
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form
          title={"Sign In"}
          formArr={[
            {
              label: "Email",
              name: "email",
              type: "text",
              placeholder: "Enter email...",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Enter password...",
            },
          ]}
          submitBtn={"Sign In"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "Don't have an account?",
            link: {
              label: "Register",
              to: "/signup",
            },
          }}
        />
      </Container>
    </>
  );
};

export default Login;
