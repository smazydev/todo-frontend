import React, { useState, useMemo } from "react";
import { FormTitle } from "../styles/FormTitle.styled";
import {
  FormInputGroup,
  StyledForm,
  StyledLabel,
  StyledRedirect,
  StyledRedirectLabel,
  StyledRedirectLink,
  FormControl,
} from "../styles/FormContainer.styled";
import { StyledInput } from "../styles/Input.styled";
import { StyledButton } from "../styles/Button.styled";

const prepareForm = (formArr) => {
  //Returns the a state object for the form [key]:value pairs.
  //example {email:"",password:""}
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

  const hasRedirect = !!redirect;
  return (
    <StyledForm autoComplete={"off"}>
      <FormTitle>{title}</FormTitle>
      <FormInputGroup>
        {formArr.map(
          ({ label, name, type, placeholder, value, todoId }, index) => {
            initialForm[name] = value;
            initialForm["id"] = todoId;
            return (
              <FormControl key={index}>
                <StyledLabel htmlFor={name}>{label}</StyledLabel>
                <StyledInput
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  placeholder={placeholder}
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormControl>
            );
          }
        )}
      </FormInputGroup>
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          onSumbitHandler();
        }}
      >
        {submitBtn}
      </StyledButton>
      {hasRedirect && (
        <StyledRedirect>
          <StyledRedirectLabel>{redirect.label}&nbsp;</StyledRedirectLabel>
          <StyledRedirectLink to={redirect.link.to}>
            {redirect.link.label}
          </StyledRedirectLink>
        </StyledRedirect>
      )}
    </StyledForm>
  );
};



export default Form;
