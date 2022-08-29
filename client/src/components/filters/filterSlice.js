import { createSlice, current } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'all',
    priorities: ['low', 'high', 'medium'],
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilter: (state, action) => {
      if (!action.payload.length) {
        state.priorities = ['low', 'high', 'medium'];
      } else {
        state.priorities = action.payload;
      }
    },
  },
});

export default filterSlice;
