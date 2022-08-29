import express from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from '../controllers/todoController.js';

const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').patch(updateTodo).delete(deleteTodo);

export default router;
