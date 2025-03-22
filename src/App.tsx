import { ChakraProvider, Button } from '@chakra-ui/react';
import './App.css'

function App() {

  return (
    <>
      <ChakraProvider>
        <Button>Click me!</Button>
      </ChakraProvider>
    </>
  )
}

export default App
