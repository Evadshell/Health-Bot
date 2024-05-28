import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Link as ChakraLink,
  ChakraProvider,
  CSSReset,
  extendTheme,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundImage: "url('/services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    },
  },
});

export default function Services() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box as="header" bg="rgba(75, 93, 53, 0.8)" color="white" py={4}>
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
                <ChakraLink as={Link} to="/user" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                  User
                </ChakraLink>
                <ChakraLink as={Link} to="/services" px={2} py={1} _hover={{ bg: "green.200", borderRadius: "md" }}>
                  Services
                </ChakraLink>
              </Stack>
            </nav>
          </Flex>
        </Box>
        <Flex flex="1" justify="center" align="center">
          <Box
            w="60vh"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            rounded="lg"
            p={6}
            textAlign="center"
            opacity="0.9"
          >
            <Text fontSize="md" mb={4}>
              AI chatbots for medical assistance enhance healthcare access and outcomes in underserved areas. This technology can save lives, improve healthcare quality, and empower individuals to make informed health decisions.
            </Text>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Explore More
              </MenuButton>
              <MenuList>
                <MenuItem>TherapyBot</MenuItem>
                <MenuItem as={Link} to="/Diet">Plan your Diet</MenuItem> {/* Navigate to Diet.js */}
                <MenuItem as={Link} to="/Bmi">Check your BMI</MenuItem> {/* Navigate to Bmi.js */}
                <MenuItem>ChatBot</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
