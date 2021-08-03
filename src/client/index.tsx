import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const Root: React.FC = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);
