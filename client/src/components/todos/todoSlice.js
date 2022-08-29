import axios from 'axios';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const URL = 'http://localhost:5000/api/v1/todos';

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todo, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.post(URL, todo);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getTodos = createAsyncThunk('todos/getTodos', async (thunkAPI) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${URL}/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${URL}/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    isLoading: false,
    todos: [],
    isError: null,
    message: null,
  },
  reducers: {},
  extraReducers: {
    [createTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload.data.todo);
      state.message = action.payload.message;
    },
    [createTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [getTodos.pending]: (state, action) => {
      state.pending = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.data.todos;
      state.message = action.payload.message;
    },
    [getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [deleteTodo.pending]: (state, action) => {
      state.isLoading = false;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload.id
      );
      state.message = action.payload.message;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [updateTodo.pending]: (state, action) => {
      state.isLoading = false;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    [updateTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export default todoSlice;
