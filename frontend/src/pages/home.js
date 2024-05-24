import { Box, Button, Link as ChakraLink, ChakraProvider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sign-up'); 
  };

  return (
    <ChakraProvider>
      <Box as="header" bg="#4b5d35" color="white" py={4}>
        <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
          <Link to="/">
            <Image src="/logo-no-background.png" alt="HealthBot Logo" boxSize="80px" objectFit="contain" />
          </Link>
          <nav>
            <Stack direction="row" spacing={4} fontSize="lg">
              <ChakraLink as={Link} to="/" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                Home
              </ChakraLink>
              <ChakraLink as={Link} to="/about" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                About
              </ChakraLink>
              <ChakraLink as={Link} to="/contact" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                Contact
              </ChakraLink>
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
            <Button colorScheme="teal" size="lg" rightIcon={<FaHeart />} onClick={handleGetStarted}>
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
            <ChakraLink as={Link} to="/about" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
              Contact
            </ChakraLink>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
