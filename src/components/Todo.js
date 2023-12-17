import React from "react";
import CompletedTodos from "./CompletedTodos";
import Form from "./Form";
import List from "./List";
import styled from "styled-components";

const Todo = () => {
  return (
    <StyledTodo className="todo">
      <CompletedTodos />
      <Form />
      <List />
    </StyledTodo>
  );
};

const StyledTodo = styled.section`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

export default Todo;
