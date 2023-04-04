import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";
import MainContainer from "../components/MainContainer";

export default function Todo() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  });

  return (

      <MainContainer>
        <h2>Todo List</h2>
        <AddTodoForm setTodoList={setTodoList} />

        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </MainContainer>
  
  );
}
