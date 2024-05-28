import {
    Box,
    Button,
    ChakraProvider,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
  
  export default function HealthBot() {
    return (
      <ChakraProvider>
        <Flex
          minH="100vh"
          bg={useColorModeValue('gray.50', 'gray.800')}
          align="center"
          justify="center"
          position="relative"
        >
          <Image
            src="/healthbot1.jpg"
            alt="HealthBot 1"
            position="absolute"
            top="0"
            left="0"
            w="50%"
            h="100%"
            objectFit="cover"
            zIndex="1"
          />
          <Image
            src="/healthbot2.jpg"
            alt="HealthBot 2"
            position="absolute"
            top="0"
            right="0"
            w="50%"
            h="100%"
            objectFit="cover"
            zIndex="1"
          />
          <Box
            position="relative"
            zIndex="2"
            bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.700')}
            p={8}
            rounded="md"
            shadow="lg"
            textAlign="center"
          >
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              color={useColorModeValue('gray.800', 'white')}
            >
              Welcome to HealthBot
            </Heading>
            <Text mt={4} fontSize={{ base: 'md', md: 'lg' }} color={useColorModeValue('gray.600', 'gray.300')}>
              Your personal health assistant.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={8} justify="center">
              <Button
                as={RouterLink}
                to="/home"
                colorScheme="teal"
                variant="solid"
                size="lg"
                px={8}
              >
                Learn More
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="teal"
                variant="outline"
                size="lg"
                px={8}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  }
  