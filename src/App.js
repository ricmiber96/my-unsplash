import Main from "./pages/Main";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Main/>
   </ChakraProvider>
  );
}

export default App;
