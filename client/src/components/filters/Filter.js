import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import Select from '../UI/Select/Select.js';
import filterSlice from './filterSlice.js';

const Filter = () => {
  const dispatch = useDispatch();

  const searchChangeHandler = (e) => {
    dispatch(filterSlice.actions.searchFilter(e.target.value));
  };

  const statusChangeHandler = (value) => {
    dispatch(filterSlice.actions.statusFilter(value));
  };

  const prioritiesChangeHandler = (e) => {
    let optionsSelected = [];

    Object.values(e.target.options).forEach((option) =>
      option.selected ? optionsSelected.push(option.value) : null
    );
    dispatch(filterSlice.actions.prioritiesFilter(optionsSelected));
  };

  return (
    <Box>
      <Text
        textTransform='uppercase'
        textAlign={'center'}
        fontWeight='600'
        fontSize='30px'
      >
        todo app with redux
      </Text>
      <Box>
        <FormLabel htmlFor='search'>Search</FormLabel>
        <InputGroup>
          <InputRightElement children={<SearchIcon />} />
          <Input
            placeholder='Input search text'
            id='search'
            onChange={searchChangeHandler}
          />
        </InputGroup>
      </Box>
      <Box margin='16px 0'>
        <FormLabel>Filter By Status</FormLabel>
        <RadioGroup gap='24px' display='flex' onChange={statusChangeHandler}>
          <Radio value='all'>All</Radio>
          <Radio value='true'>Completed</Radio>
          <Radio value='false'>Todo</Radio>
        </RadioGroup>
      </Box>
      <Box>
        <FormLabel>Filter By Priority</FormLabel>
        <Select
          multiple
          height='70px'
          icon={<></>}
          onChange={prioritiesChangeHandler}
        />
      </Box>
    </Box>
  );
};

export default Filter;
