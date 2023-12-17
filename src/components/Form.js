import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../features/TodoSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(addTodo({ id: Date.now(), text: input, completed: false }));
      setInput("");
      return;
    }

    return null;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your next task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <TiPlus />
      </button>
    </StyledForm>
  );
};

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: var(--borderRadius);
    background: var(--fourthColor);
    color: var(--primaryColor);
    font-size: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    padding: 10px;
    border: none;
    background-color: var(--secondaryColor);
    color: var(--backgroundColor);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;

    button {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
  }
`;

export default Form;
