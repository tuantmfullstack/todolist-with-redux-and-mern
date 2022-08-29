import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'todo must have name.'],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: {
      values: ['high', 'medium', 'low'],
      message: 'priority must be either high, medium or low',
    },
    required: [true, 'todo must have priority.'],
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
