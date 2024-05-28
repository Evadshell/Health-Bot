import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Diet = () => {
  const navigate = useNavigate();

  const handleCreateNowClick = () => {
    navigate('/createDiet');
  };

  return (
    <Box
      bgGradient="linear(to-r, pink.100, green.100)"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Get your personalized Diet Chart here only
        </Heading>
        <Button colorScheme="teal" size="lg" onClick={handleCreateNowClick}>
          Create Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Diet;
