import styled from "styled-components";

export const StyledOptions = styled.div`
  padding: 0 20px;
  border-radius: 0 0 8px 9px;
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.todoItem.bg};

  box-shadow: -1px 3px 7px 0px rgba(0, 0, 0, 0.35);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;
export const TotalItems = styled.p`
  color: ${(props) => props.theme.colors.option.textColor};
`;

export const FilterOptions = styled.form`
  width: 250xp;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InputGroupRadio = styled.div`
  color: ${(props) => props.theme.colors.option.textColor};
  label {
    margin: 0 10px;
    cursor: pointer;

    color: ${(props) => props.active && "hsl(220, 98%, 61%)"};

    &:hover {
      color: ${(props) => props.theme.colors.option.textHover};
    }
  }

  input {
    display: none;
  }
`;

export const DeleteOption = styled.button`
  border: none;
  outline: none;
  padding: 3px;
  background-color: transparent;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.option.textColor};

  &:hover {
    color: ${({ theme }) => theme.colors.option.textHover};
  }
`;

export const FilteredOptionsMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    /* display: block; */
    width: 100%;
    height: 50px;
    margin-top: 1.1rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.todoItem.bg};
    box-shadow: -1px 3px 7px 0px rgba(0, 0, 0, 0.35);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
