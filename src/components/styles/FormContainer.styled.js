import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.div`
  background-color: rgba(37, 39, 60, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 600px;
  height: 600px;
`;

export const FormInputGroup = styled.div`
  margin-top: 50px;
`;

export const FormControl = styled.div`
  :first-of-type {
    margin-top: 10px;
  }
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 5px;
  color: white;
`;

export const StyledRedirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StyledRedirectLabel = styled.span`
  color: white;
  margin-top: 40px;
`;

export const StyledRedirectLink = styled(Link)`
  color: white;
  margin-top: 40px;
`;
