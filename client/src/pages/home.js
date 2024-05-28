import {
  Box,
  Button,
  Link as ChakraLink,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import { FaHeart, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Login'); 
  };

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" minHeight="100vh">
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
                 <ChakraLink as={Link} to="/User" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                  User
                </ChakraLink> 
                <ChakraLink as={Link} to="/services" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                  services
                </ChakraLink> 
              </Stack>
            </nav>
          </Flex>
        </Box>

        <Box as="main" flex="1" bg="gray.50" py={10} id="home">
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

        <Box as="footer" bg="#4b5d35" color="white" py={10}>
          <Container as={Stack} maxW={'6xl'}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Stack spacing={6}>
                <Box>
                  <Image src="/logo-no-background.png" alt="HealthBot Logo" boxSize="80px" objectFit="contain"/>
                </Box>
                <Text fontSize={'sm'}>
                  © {new Date().getFullYear()} HealthBot. All rights reserved.
                </Text>
                <Stack direction={'row'} spacing={6}>
                  <IconButton
                    as={Link}
                    href="https://twitter.com"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    size="lg"
                    isRound
                  />
                  <IconButton
                    as={Link}
                    href="https://youtube.com"
                    aria-label="YouTube"
                    icon={<FaYoutube />}
                    size="lg"
                    isRound
                  />
                  <IconButton
                    as={Link}
                    href="https://instagram.com"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    size="lg"
                    isRound
                  />
                </Stack>
              </Stack>
              <Stack align={'flex-start'}>
                <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                  Company
                </Text>
                <ChakraLink as={Link} to="/about">About</ChakraLink>
                <ChakraLink as={Link} to="/contact">Contact</ChakraLink>
                <ChakraLink as={Link} to="/privacy">Privacy Policy</ChakraLink>
                <ChakraLink as={Link} to="/terms">Terms of Service</ChakraLink>
              </Stack>
              <Stack align={'flex-start'}>
                <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                  Stay up to date
                </Text>
                <Stack direction={'row'}>
                  <Input
                    placeholder={'Your email address'}
                    bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.300')}
                    border={0}
                    _focus={{
                      bg: 'whiteAlpha.300',
                    }}
                  />
                  <IconButton
                    aria-label="Subscribe"
                    icon={<BiMailSend />}
                    size="lg"
                    colorScheme="teal"
                  />
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
