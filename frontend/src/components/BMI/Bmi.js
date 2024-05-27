import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let feedbackMessage = '';

      if (bmiValue < 18.5) {
        feedbackMessage = 'Your BMI is low. Consider increasing your calorie intake with a balanced diet rich in proteins, carbs, and healthy fats.';
      } else if (bmiValue < 24.9) {
        feedbackMessage = 'Your BMI is normal. Keep up with your current diet and exercise regularly to maintain your health.';
      } else if (bmiValue < 29.9) {
        feedbackMessage = 'Your BMI is slightly high. Consider a balanced diet and regular exercise to maintain a healthy weight.';
      } else {
        feedbackMessage = 'Your BMI is high. It is advisable to follow a healthy diet plan and increase physical activity. Consult a healthcare provider for personalized advice.';
      }

      setFeedback(feedbackMessage);
    }
  };

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      backgroundImage="url('/BMI.png')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        backdropFilter="blur(10px)"
      ></Box>
      <Container centerContent position="relative" zIndex="1">
        <VStack spacing={8} align="stretch">
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={8}
            mt={8}
            bg="white"
            opacity="0.9"
            boxShadow="lg"
            maxW="md"
          >
            <Heading as="h2" size="xl" textAlign="center">
              BMI Calculator
            </Heading>
            <FormControl>
              <FormLabel>What's BMI?</FormLabel>
              <Text>
                BMI (Body Mass Index) is a measure of body fat based on height and weight. It is used to screen for weight categories that may lead to health problems.
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel>How to Calculate Your BMI</FormLabel>
              <Text>
                To calculate your BMI, you need to know your weight in kilograms and your height in centimeters. Then, divide your weight by the square of your height (height in meters squared).
              </Text>
            </FormControl>
            <FormControl id="weight">
              <FormLabel>Weight (kg)</FormLabel>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormControl>
            <FormControl id="height">
              <FormLabel>Height (cm)</FormLabel>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="teal" onClick={calculateBmi}>
              Calculate BMI
            </Button>
            {bmi && (
              <Box textAlign="center">
                <Text fontSize="xl">Your BMI: {bmi}</Text>
                <Text mt={6}>{feedback}</Text>
              </Box>
            )}
            <Button colorScheme="pink" onClick={() => navigate('/diet')}>
              Plan Your Diet
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Bmi;
