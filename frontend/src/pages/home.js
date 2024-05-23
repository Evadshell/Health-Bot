import { Box, Button, ChakraProvider, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function Home() {
  return (
    <ChakraProvider>
      <Box as="header" bg="#4b5d35" color="white" py={4}>
        <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
          <Heading as="h1" size="lg">HealthBot</Heading>
          <nav>
            <Link px={2} href="#home">Home</Link>
            <Link px={2} href="#about">About</Link>
            <Link px={2} href="#contact">Contact</Link>
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
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Home;