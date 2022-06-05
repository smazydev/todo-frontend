import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todosAPI from "../../services/todosService";

export const fetchTodos = createAsyncThunk("todo/fetchTodosStatus", async (data) => {
  console.log("todos")
  const response = await todosAPI.fetchTodos(data)
  return response.data;
});

const initialState = {
  todoArray: [],
  currentlyBeingEdited: {},
  currentPage: 1,
  todosPerPage: 10,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoArray.push(action.payload);
    },
    updateTodoTitle: (state, action) => {
      const { id, title } = action.payload;
      state.todoArray.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
      });
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      const filteredArray = state.todoArray.filter(
        (item) => item.id !== action.payload
      );
      console.log(filteredArray, "filtered");
      state.todoArray = filteredArray;
    },
    markCompleted: (state, action) => {
      state.todoArray.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
    editTodo: (state, action) => {
      state.todoArray.map((item) => {
        if (item.id === action.payload) {
          state.currentlyBeingEdited = item;
        }
      });
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Add user to the state array
      state.todoArray = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  updateTodoTitle,
  markCompleted,
  deleteTodo,
  editTodo,
  changeCurrentPage,
} = todoSlice.actions;

export default todoSlice.reducer;
