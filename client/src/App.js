import { Box, Flex } from '@chakra-ui/react';
import Filter from './components/filters/Filter.js';
import Todos from './components/todos/Todos.js';

function App() {
  return (
    <Flex width='100vw' height='100vh' justify='center' align='center'>
      <Flex
        width='500px'
        height={'500px'}
        boxShadow='0 0 8px rgba(0,0,0,0.4)'
        bg='white.100'
        direction='column'
        borderRadius='12px'
        p='16px 24px'
      >
        <Filter />
        <Todos />
      </Flex>
    </Flex>
  );
}

export default App;
