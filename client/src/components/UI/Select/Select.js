import { Select } from '@chakra-ui/react';

const SelectComponent = (props) => {
  return (
    <Select {...props}>
      <option value={'medium'}>Medium</option>
      <option value={'high'}>High</option>
      <option value={'low'}>Low</option>
    </Select>
  );
};

export default SelectComponent;
