import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { completeTodo, removeTodo } from "../features/TodoSlice";

const Task = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(completeTodo(id));
  };

  return (
    <StyledTask>
      <div className="content">
        <input
          type="checkbox"
          name="task"
          id={id}
          checked={completed}
          onChange={handleChange}
          className={`${completed ? "checkbox checked" : "checkbox"}`}
        />
        <div className="checkmark" onClick={handleChange}></div>
        <label htmlFor={id} className={`${completed ? "completed" : ""}`}>
          {text}
        </label>
      </div>
      <div className="actions">
        <button onClick={() => dispatch(removeTodo(id))}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid var(--primaryColor);
  background: var(--fourthColor);
  border-radius: var(--borderRadius);

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;

    .checkbox {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: transparent;
      border: 1px solid var(--primaryColor);
      border-radius: var(--borderRadius);
    }

    .checkbox:checked ~ .checkmark {
      background-color: var(--tertiaryColor);
      border: none;
    }

    label {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: var(--borderRadius);
      color: var(--primaryColor);
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }
    .completed {
      text-decoration: line-through;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actions button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .actions svg {
    font-size: 1.5rem;
    color: var(--primaryColor);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;

    .content {
      label {
        font-size: 0.8rem;
      }
    }

    .actions svg {
      font-size: 1rem;
    }
  }
`;

export default Task;
