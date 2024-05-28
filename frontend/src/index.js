import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const clientId = "782310377329-ugn3ktt22vo08rd1jtpn60v5q6rdd927.apps.googleusercontent.com";

ReactDOM.render(
    <GoogleOAuthProvider clientId={clientId}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);
