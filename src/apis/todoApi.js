import axiosInstance from ".";

export const getTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response;
};

export const createTodo = async (todo) => {
  return await axiosInstance.post("/todos", { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  return await axiosInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return await axiosInstance.delete(`/todos/${id}`);
};
