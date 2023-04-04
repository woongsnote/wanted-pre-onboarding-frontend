import { useEffect, useState, useRef } from "react";

export default function TodoItem({
  todo,
  updateTodoHandler,
  deleteTodoHandler,
}) {
  const [isEditMode, setEditMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditMode) {
      editInputRef.current.focus();
    }
  }, [isEditMode]);

  const onClickEditHandler = () => {
    setEditMode(true);
  };

  const onChangeEditInput = (event) => {
    setNewTodo(event.target.value);
  };

  const onClickCancleHandler = () => {
    setEditMode(false);
    setNewTodo(todo.todo);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() =>
            updateTodoHandler(todo.id, newTodo, !todo.isCompleted)
          }
        />
        {isEditMode ? (
          <input
            data-testid="modify-input"
            value={newTodo}
            ref={editInputRef}
            onChange={onChangeEditInput}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
        {isEditMode ? (
          <>
            <button
              data-testid="submit-button"
              onClick={() => {
                updateTodoHandler(todo.id, newTodo, todo.isCompleted);
                setEditMode(false);
              }}>
              제출
            </button>
            <button data-testid="cancel-button" onClick={onClickCancleHandler}>
              취소
            </button>
          </>
        ) : (
          <>
            <button data-testid="modify-button" onClick={onClickEditHandler}>
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => deleteTodoHandler(todo.id)}>
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
}
