import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
        <Header />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
