import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Link as ChakraLink,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function User(): JSX.Element {
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
              <ChakraLink as={Link} to="/user" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                User
              </ChakraLink>
            </Stack>
          </nav>
        </Container>
      </Box>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile Edit
          </Heading>
          <FormControl id="userIcon">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Box as="footer" bg="#4b5d35" color="white" py={10}>
        <Container as={Stack} maxW={'6xl'}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image src="/logo-no-background.png" alt="HealthBot Logo" boxSize="80px" objectFit="contain" />
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
    </ChakraProvider>
  );
}
