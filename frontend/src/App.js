import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Bmi from './components/BMI/Bmi';
import CreateDiet from './components/Diet/CreateDiet';
import Diet from './components/Diet/Diet';
import Meal from './components/Diet/Meal';
import MealList from './components/Diet/MealList';
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/createDiet" element={<CreateDiet />} /> 
          <Route path="/Meal" element={<Meal />} />
          <Route path="/MealList" element={<MealList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
