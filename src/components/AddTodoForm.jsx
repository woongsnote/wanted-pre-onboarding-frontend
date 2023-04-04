import { useState } from "react";
import styled from "styled-components";
import { createTodo, getTodos } from "../apis/todoApi";

export default function AddTodoForm({setTodoList}) {
  const [todo, setTodo] = useState("");
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const onCreateTodoHandler = async (event) => {
    event.preventDefault();
    if (todo !== "") {
      const response = await createTodo(todo);
      if (response.status === 201) {
        const response = await getTodos();
        setTodoList(response.data);
        setTodo("");
      }
    }
  };
  return (
    <form onSubmit={onCreateTodoHandler}>
      <NewTodoContainer>
        <input
          data-testid="new-todo-input"
          value={todo}
          onChange={onChangeHandler}
        />
        <button data-testid="new-todo-add-button">추가</button>
      </NewTodoContainer>
    </form>
  );
}
const NewTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: cente;
`;
