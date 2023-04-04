import styled from "styled-components";
import { getTodos, updateTodo, deleteTodo } from "../apis/todoApi";
import TodoItem from "./TodoItem";
import {  useEffect } from "react";

export default function TodoList({todoList, setTodoList}) {

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      const getMyTodos = async () => {
        const response = await getTodos();
        if (response.status === 200) {
          setTodoList(response.data);
        }
      };
      getMyTodos();
    }
  },[setTodoList]);

  const onUpdateTodoHandler = async (id, newTodo, isCompleted) => {
    const response = await updateTodo(id, newTodo, isCompleted);
    if (response.status === 200) {
      const response = await getTodos();
      setTodoList(response.data);
    }
  };

  const onDeleteTodoHandler = async (id) => {
    const response = await deleteTodo(id);
    if (response.status === 204) {
      await getTodos();
      const response = await getTodos();
      setTodoList(response.data);
    }
  };
  return (
    <TodoListContainer>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodoHandler={onUpdateTodoHandler}
            deleteTodoHandler={onDeleteTodoHandler}
          />
        );
      })}
    </TodoListContainer>
  );
}

const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
