import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo, getTodos } from "../apis/todoApi";
import styled from "styled-components";

export default function Todo() {
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/signin");
  // };

  const onChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  async function getMyTodos() {
    const response = await getTodos();
    setTodos(response);
  }

  const createTodoHandler = async (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      const response = await createTodo(newTodo);
      console.log(response);
      if (response.status === 201) {
        const result = await getTodos();
        console.log(result);
        setTodos(result);
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    } else {
      getMyTodos();
    }
  }, [navigate]);

  return (
    <div>
      {/* <button onClick={() => logout()}>Logout</button> */}

      <form onSubmit={createTodoHandler}>
        <NewTodoContainer>
          <input
            data-testid="new-todo-input"
            value={newTodo}
            onChange={onChangeHandler}
          />
          <button data-testid="new-todo-add-button">추가</button>
        </NewTodoContainer>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                {isEditMode ? <input /> : <span>{todo.todo}</span>}
              </label>
              <button
                data-testid="modify-button"
                onClick={(id) => {
                  setIsEditMode(true);
                }}>
                편집
              </button>
              <button data-testid="delete-button" onClick={() => {}}>
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const NewTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: cente;
`;
