import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateDiet = () => {
  const navigate = useNavigate();
  const [calories, setCalories] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [disease, setDisease] = useState('');

  const handleGeneratePlanClick = () => {
    navigate('/Meal');
  };

  return (
    <Box
      bgGradient="linear(to-r, pink.100, green.100)"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={8} width="full" maxWidth="md">
        <Heading as="h2" size="xl">
          Enter Your Details
        </Heading>
        <FormControl isRequired>
          <FormLabel>Calorie Requirement</FormLabel>
          <Input
            placeholder="Enter your calorie requirement"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <Input
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Height (cm)</FormLabel>
          <Input
            placeholder="Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Weight (kg)</FormLabel>
          <Input
            placeholder="Enter your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Underlying Health Conditions</FormLabel>
          <Select
            placeholder="Select condition"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          >
            <option value="Diabetes">Diabetes</option>
            <option value="Hypertension">Hypertension</option>
            <option value="Heart Disease">Heart Disease</option>
            <option value="Asthma">Asthma</option>
            <option value="Arthritis">Arthritis</option>
            <option value="Thyroid">Thyroid</option>
            <option value="Obesity">Obesity</option>
            <option value="Anemia">Anemia</option>
            <option value="Allergies">Allergies</option>
            <option value="Chronic Kidney Disease">Chronic Kidney Disease</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleGeneratePlanClick}>
          Generate My Plan
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateDiet;
