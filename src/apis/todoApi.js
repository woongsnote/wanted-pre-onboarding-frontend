import { authApi } from ".";

export const getTodos = async () => {
  const response = await authApi.get("/todos");
  return response.data;
};

export const createTodo = async (todo) => {
  return await authApi.post("/todos", { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  return await authApi.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return await authApi.delete(`/todos/${id}`);
};
