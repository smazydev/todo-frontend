import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 10px;
  margin-bottom: 2rem;
  /* color: ${(props) => {}}; */
  border: none;
`;

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
  width: 100%;
  height: 65px;
  border-radius: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.input.bg};
  color: ${({ theme }) => theme.colors.input.textColor};
  font-size: ${({ theme }) => theme.font.size};
`;
