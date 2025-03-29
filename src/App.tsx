import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import "./App.css";
import { LoginUserProvider } from "./components/providers/LoginUserProvider";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <LoginUserProvider>
            <Router />
          </LoginUserProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
