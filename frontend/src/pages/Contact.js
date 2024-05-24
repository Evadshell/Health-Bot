import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, Text, Textarea, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { BsDiscord, BsGithub, BsPerson } from 'react-icons/bs';
import { MdEmail, MdFacebook, MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md';

function Contact() {
  return (
    <Container bg="#f0f4f2" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#4a5c42"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
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
                <Box bg="white" borderRadius="lg" boxShadow="lg">
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
  );
}

export default Contact;
