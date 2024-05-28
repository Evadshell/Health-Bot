import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Bmi from './components/BMI/Bmi';
import CreateDiet from './components/Diet/CreateDiet';
import Diet from './components/Diet/Diet';
import Final from './components/Diet/Final';
import Meal from './components/Diet/Meal';
import MealList from './components/Diet/MealList';
import HealthBot from './components/Healthbot/Healthbot';
import About from './pages/about';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import User from './pages/User';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <CSSReset />
        <Router>
          <Routes>
            <Route path="/" element={<HealthBot />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bmi" element={<Bmi />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/creatediet" element={<CreateDiet />} />
            <Route path="/meal/*" element={<Final />}>
              <Route path="meal" element={<Meal />} />
              <Route path="meal-list" element={<MealList />} />
            </Route>
            <Route path="/healthbot" element={<HealthBot />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
