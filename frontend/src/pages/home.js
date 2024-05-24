import { Box, Button, ChakraProvider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <ChakraProvider>
      <Box as="header" bg="#4b5d35" color="white" py={4}>
        <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
          <Heading as="h1" size="lg">HealthBot</Heading>
          <nav>
          <Stack direction="row" spacing={4} fontSize="lg">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Stack>
          </nav>
        </Flex>
      </Box>

      <Box as="main" bg="gray.50" py={10} id="home">
        <Flex maxW="1200px" mx="auto" px={4} direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="2xl" mb={4}>
              Welcome to HealthBot
            </Heading>
            <Text fontSize="xl" mb={6}>
              Breaking Barriers, Saving Lives: Our AI Chatbot Delivers Instant Medical Aid, Anywhere, Anytime!
            </Text>
            <Button colorScheme="teal" size="lg" rightIcon={<FaHeart />}>
              Get Started
            </Button>
          </Box>
          <Box flex="1" mt={{ base: 6, md: 0 }}>
            <Image src="/Healthbot.png" alt="HealthBot" borderRadius="md" />
          </Box>
        </Flex>
      </Box>

      <Box as="footer" bg="#4b5d35" color="white" py={4}>
        <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} HealthBot. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            {/* Use Link component for navigation */}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
