const express = require('express');
const app = express();
const port = 3001; // Choose a different port than your React app to avoid conflicts

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/api/health', (req, res) => {
    res.send({ message: 'Health check successful!' });
});

// Endpoint to handle chatbot requests
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    
    // Placeholder response
    const botResponse = `You said: ${userMessage}`;
    
    res.send({ response: botResponse });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
