import { Box, Button, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import MealList from "./MealList";

function Final() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const toast = useToast();

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "There was an error fetching the meal data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <Box
      className="Final"
      bgGradient="linear(to-r, pink.200, green.200)"
      minH="100vh"
      p={4}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="600px"
        mx="auto"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        mt={10}
      >
        <Heading as="h1" mb={6} fontSize="2xl" color="green.500">
          Daily Meal Planner
        </Heading>
        <Text mb={4} color="gray.500">
          Enter your target calories and get a daily meal plan
        </Text>
        <Input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          mb={4}
          borderColor="green.300"
          focusBorderColor="green.500"
        />
        <Button
          onClick={getMealData}
          colorScheme="green"
          bgGradient="linear(to-r, pink.400, green.400)"
          _hover={{ bgGradient: "linear(to-r, pink.300, green.300)" }}
          mb={4}
        >
          Get Daily Meal Plan
        </Button>
        {mealData && <MealList mealData={mealData} />}
      </Flex>
    </Box>
  );
}

export default Final;
