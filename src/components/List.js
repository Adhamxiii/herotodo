import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import styled from "styled-components";

const List = () => {
  const tasks = useSelector((state) => state.todos.todos);

  return (
    <StyledList className="list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    .list {
      padding: 10px 0;
    }
  }
`;

export default List;
