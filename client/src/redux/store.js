import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../components/filters/filterSlice.js';
import todoSlice from '../components/todos/todoSlice.js';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export default store;
