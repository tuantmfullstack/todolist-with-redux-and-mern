import { createSelector } from '@reduxjs/toolkit';

export const todos = (state) => state.todos.todos;
export const searchFilter = (state) => state.filter.search;
export const statusFilter = (state) => state.filter.status;
export const prioritiesFilter = (state) => state.filter.priorities;

export const todosRemaining = createSelector(
  todos,
  searchFilter,
  statusFilter,
  prioritiesFilter,
  (todos, search, status, priorities) => {
    const regex = new RegExp(`${search}`, 'gi');

    if (status === 'all')
      return todos.filter(
        (todo) =>
          todo.name.search(regex) >= 0 && priorities.includes(todo.priority)
      );

    return todos.filter(
      (todo) =>
        todo.name.search(regex) >= 0 &&
        todo.isCompleted.toString() === status &&
        priorities.includes(todo.priority)
    );
  }
);
