import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
// import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState(false);

    // const handleLoginSuccess = async (tokenResponse) => {
    //     try {
    //         const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    //             headers: {
    //                 Authorization: `Bearer ${tokenResponse.access_token}`
    //             }
    //         });
    //         console.log("Login Success! Current User: ", userInfo.data);
    //         setError(''); // Clear any previous errors
    //         setSuccess(true); // Set success message
    //     } catch (error) {
    //         console.error('Error fetching user info:', error);
    //         setError('Login Failed! Please try again.');
    //     }
    // };

    // const handleLoginFailure = (error) => {
    //     console.error("Login Failed! Error: ", error);
    //     setError('Login Failed! Please try again.');
    // };

    // // const login = useGoogleLogin({
    // //     onSuccess: handleLoginSuccess,
    // //     onError: handleLoginFailure,
    // //     scope: 'profile email',
    // // });

    const handleProfileUpdate = () => {
        navigate('/User');
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bgGradient="linear(to-r, teal.500, green.500)"
        >
            <VStack spacing={4} p={8} bg="white" boxShadow="lg" borderRadius="md">
                <Heading as="h1" size="xl" textAlign="center" color="teal.500">
                    Welcome to HealthBot
                </Heading>
                {/* {success ? (
                    <>
                        <Text color="green.500" fontSize="lg">
                            Signed in successfully!
                        </Text>
                        <Text fontSize="md">
                            Do you want to update your profile?
                        </Text>
                        <Button 
                            colorScheme="teal" 
                            size="md" 
                            onClick={handleProfileUpdate} 
                            borderRadius="full" 
                            _hover={{ bg: 'teal.600' }}
                        >
                            Yes, update my profile
                        </Button>
                    </>
                ) : (
                    <>
                        <Button 
                            colorScheme="teal" 
                            size="lg" 
                            // onClick={login} 
                            borderRadius="full" 
                            _hover={{ bg: 'teal.600' }}
                        >
                            Login with Google
                        </Button>
                        {error && <Text color="red.500" mt={4}>{error}</Text>}
                    </>
                )} */}
            </VStack>
        </Box>
    );
}

export default Login;
