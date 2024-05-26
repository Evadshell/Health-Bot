import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HealthBot from './components/healthbot/healthbot';
import About from './pages/about';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import User from './pages/User';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<HealthBot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
