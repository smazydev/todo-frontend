import axiosInstance from "../axiosConfig";

export default {
  fetchTodos: async (data) => {
    const res = await axiosInstance.get(
      `http://localhost:4000/api/v1/todos?currentPage=${data.currentPage}&todosPerPage=${data.todosPerPage}`
    );
    return res.data;
  },
  createTodo: async (data) => {
    const res = await axiosInstance.post(
      "http://localhost:4000/api/v1/todos",
      data
    );
    return res.data;
  },
  updateTodo: async (data) => {
    const res = await axiosInstance.post(
      `http://localhost:4000/api/v1/todos/${data.todoId}`,
      { title: data.title }
    );
    return res.data;
  },
  deleteTodo: async (data) => {
    const res = await axiosInstance.post(
      `http://localhost:4000/api/v1/todos/${data.todoId}`,
      { title: data.title }
    );
    return res.data;
  },
};
