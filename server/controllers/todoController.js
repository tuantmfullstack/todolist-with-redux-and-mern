import Todo from '../models/todoModel.js';

export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort('-isCompleted');

    res.status(200).json({
      status: 'success',
      length: todos.length,
      data: {
        todos,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Todo created!',
      data: {
        todo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.isCompleted = !todo.isCompleted;
    await todo.save({ validateBeforeSave: true });

    res.status(202).json({
      status: 'success',
      message: 'Update successfully!',
      data: {
        todo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      message: 'Todo deleted!',
      id: req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
