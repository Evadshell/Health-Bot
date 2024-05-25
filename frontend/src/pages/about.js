import {
  Box,
  Link as ChakraLink,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <ChakraProvider>
      <Box as="header" bg="#4b5d35" color="white" py={4}>
        <Container maxW="1200px" mx="auto" px={4} display="flex" justifyContent="space-between" alignItems="center">
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
        </Container>
      </Box>

      <Box as="main" bg="gray.50" py={10}>
        <Container maxW="1200px" mx="auto" px={4}>
          <Grid
            h="auto"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg="#AFE1AF" borderRadius="10px">
              <Box p={4}>
                <Heading as="h2" size="md" mb={4} color="gray.600" fontFamily="Apple SD Gothic Neo, sans-serif">
                  Introduction
                </Heading>
                <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="gray.600" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">
                  Remote areas struggle with healthcare access. Our AI chatbot breaks barriers, offering multilingual support.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg="#454B1B" borderRadius="10px">
              <Box p={4}>
                <Heading as="h2" size="md" mb={4} color="white" fontFamily="Apple SD Gothic Neo, sans-serif">
                  The Need
                </Heading>
                <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">
                  Healthcare disparities affect many. Our AI provides immediate medical help in various languages.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg="#454B1B" borderRadius="10px">
              <Box p={4}>
                <Heading as="h2" size="md" mb={4} color="white" fontFamily="Apple SD Gothic Neo, sans-serif">
                  Key Features
                </Heading>
                <Stack spacing={2}>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Multilingual Support</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Voice & Text Input</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Accurate Diagnosis</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Prescription Assistance</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="white" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Doctor Recommendations</Text>
                </Stack>
              </Box>
            </GridItem>
            <GridItem colSpan={4} bg="#AFE1AF" borderRadius="10px">
              <Box p={4}>
                <Heading as="h2" size="md" mb={4} color="gray.600" fontFamily="Apple SD Gothic Neo, sans-serif">
                  Benefits
                </Heading>
                <Stack spacing={2}>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="gray.600" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Accessibility</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="gray.600" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Language Inclusivity</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="gray.600" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Timely Assistance</Text>
                  <Text _hover={{ bg: "green.200", borderRadius: "md", padding: 2 }} color="gray.600" fontWeight="bold" fontFamily="Apple SD Gothic Neo, sans-serif">Empowering Communities</Text>
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
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
                  as={ChakraLink}
                  href="https://twitter.com"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  size="lg"
                  isRound
                />
                <IconButton
                  as={ChakraLink}
                  href="https://youtube.com"
                  aria-label="YouTube"
                  icon={<FaYoutube />}
                  size="lg"
                  isRound
                />
                <IconButton
                  as={ChakraLink}
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
    </ChakraProvider>
  );
}

export default About;
