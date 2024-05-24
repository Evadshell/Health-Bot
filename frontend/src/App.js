import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
