import { ChakraProvider, Button } from '@chakra-ui/react';
import theme from './theme/theme';
import './App.css'

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Button colorScheme='teal'>Click me!</Button>
        <p>あああああああああああああああ</p>
      </ChakraProvider>
    </>
  )
}

export default App
