import styled from "styled-components";

export const StyledTodoItem = styled.div`
  width: 95%;
  height: 65px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.todoBorder};
  border-right: none;
  border-left: none;
  background-color: ${({ theme }) => theme.colors.todoItem.bg};

  :first-child {
    border-radius: 10px 10px 0 0;
    border-top: none;
    /* border-top: none; */
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.input.textColor};
`;

export const IconWrapper = styled.span`
  /* color: blue; */
  border-radius: 50%;
  background-color: green;
  border: 1px solid yellow;

  /* background-color: red; */
  /* align-self: center; */
`;

export const CheckIcon = styled.img`
  color: red;

  fill: black;
  width: 0.9rem;

  &:hover {
    fill: yellow;
  }
`;

export const TodoItemDescription = styled.p`
  margin-left: 0.7rem;
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.todoItem.textColor};
  text-decoration: ${(props) => props.completed && "line-through"};
  font-family: Josefin Sans, sans-serif;
`;

// Mobile version
export const DeleteIcon = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-end;
  }
`;
