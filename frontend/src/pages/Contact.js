import {
  Box,
  Button,
  Link as ChakraLink,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsPerson } from 'react-icons/bs';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdFacebook, MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Contact() {
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
      <Container bg="#f0f4f2" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex justify="center" align="center" w="100%" py={10}>
          <Box
            bg="#4a5c42"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            w={{ sm: "90%", md: "80%", lg: "60%" }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.200">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="white"
                          _hover={{ border: '2px solid #9dcfb8' }}
                          leftIcon={<MdPhone color="#9dcfb8" size="20px" />}
                        >
                          +91-9123456789
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="white"
                          _hover={{ border: '2px solid #9dcfb8' }}
                          leftIcon={<MdEmail color="#9dcfb8" size="20px" />}
                        >
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="white"
                          _hover={{ border: '2px solid #9dcfb8' }}
                          leftIcon={<MdLocationOn color="#9dcfb8" size="20px" />}
                        >
                          Raipur, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#9dcfb8' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#9dcfb8' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#9dcfb8' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg" boxShadow="lg" w="100%">
                    <Box m={8} color="#2c3e50">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" focusBorderColor="#9dcfb8" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="email" size="md" focusBorderColor="#9dcfb8" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            focusBorderColor="#9dcfb8"
                          />
                        </FormControl>
                        <FormControl id="submit" float="right">
                          <Button
                            variant="solid"
                            bg="#4a5c42"
                            color="white"
                            _hover={{ bg: "#9dcfb8" }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
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

export default Contact;
 