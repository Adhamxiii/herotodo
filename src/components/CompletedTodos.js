import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CompletedTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <StyledCompletedTodos className="completed-todos">
      <div className="container">
        <div className="content">
          <h2>Todo done</h2>
          <p>Keep it up</p>
        </div>
        <div className="progress">
          {todos.filter((todo) => todo.completed).length}/{todos.length}
        </div>
      </div>
    </StyledCompletedTodos>
  );
};

const StyledCompletedTodos = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  border: 1px solid var(--primaryColor);
  border-radius: var(--borderRadius);

  .container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      font-size: 2rem;
      color: var(--primaryColor);
      margin: 0 10px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }

    p {
      font-size: 1rem;
      margin: 0 10px;
      color: var(--secondaryColor);
    }
  }

  .progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--secondaryColor);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--backgroundColor);
  }

  @media (max-width: 600px) {
    width: 100%;

    .content {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export default CompletedTodos;
