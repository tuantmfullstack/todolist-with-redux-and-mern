import { Button, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNotification from '../../hook/useNotification.js';
import { todosRemaining } from '../../redux/selectors.js';

import Select from '../UI/Select/Select.js';
import TodoItem from './TodoItem/TodoItem.js';
import { createTodo, getTodos } from './todoSlice.js';

const Todos = () => {
  const [todoInput, setTodoInput] = useState('');
  const [prioritySelect, setPrioritySelect] = useState('medium');
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemaining);
  const { sendNotification } = useNotification();

  const todoInputChangeHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const selectChangeHandler = (e) => {
    setPrioritySelect(e.target.value);
  };

  const addNewTodoHandler = () => {
    const todo = { name: todoInput, priority: prioritySelect };
    sendNotification(dispatch(createTodo(todo)));

    setTodoInput('');
    setPrioritySelect('medium');
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Flex flex='1' direction='column' justify='space-between'>
      <Flex
        flex='1'
        overflowY={'auto'}
        overflowX='hidden'
        direction='column'
        margin='8px 12px'
        maxHeight={'100px'}
      >
        {todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            id={todo._id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            priority={todo.priority}
          />
        ))}
      </Flex>
      <Flex>
        <Input onChange={todoInputChangeHandler} value={todoInput} />
        <Select
          width='220px'
          onChange={selectChangeHandler}
          value={prioritySelect}
        />
        <Button
          colorScheme='blue'
          width='100px'
          loadingText={'...'}
          onClick={addNewTodoHandler}
        >
          Add
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todos;
