import { SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useNotification from '../../../hook/useNotification.js';
import { deleteTodo, updateTodo } from '../todoSlice.js';

const TodoItem = ({ id, name, isCompleted, priority }) => {
  const [checked, setChecked] = useState(isCompleted);
  const dispatch = useDispatch();
  const bgColor = { high: 'red', medium: 'blue', low: 'gray' };
  const { sendNotification } = useNotification();

  const checkboxChangeHandler = () => {
    setChecked((preVal) => !preVal);
    sendNotification(dispatch(updateTodo(id)));
  };

  const deleteTodoHandler = () => {
    sendNotification(dispatch(deleteTodo(id)));
  };

  return (
    <Flex justify='space-between' marginBottom='8px' _hover={{ opacity: 0.7 }}>
      <Box>
        <Checkbox
          isChecked={checked}
          style={
            checked ? { textDecoration: 'line-through', opacity: '0.7' } : {}
          }
          onChange={checkboxChangeHandler}
        >
          {name}
        </Checkbox>
        <SmallCloseIcon
          marginLeft='8px'
          _hover={{ cursor: 'pointer' }}
          onClick={deleteTodoHandler}
        />
      </Box>
      <Text
        bg={`${bgColor[priority]}.400`}
        p='2px 8px'
        color='#fff'
        borderRadius='4px'
        textTransform={'capitalize'}
        style={
          checked ? { textDecoration: 'line-through', opacity: '0.7' } : {}
        }
      >
        {priority}
      </Text>
    </Flex>
  );
};

export default TodoItem;
