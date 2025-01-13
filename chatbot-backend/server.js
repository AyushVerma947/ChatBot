// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuration variables
const apiKey = 'YOUR_API_KEY';
const baseURI = 'https://integrate.api.nvidia.com/v1/chat/completions';// replace it with your base uri

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to proxy chat requests to NVIDIA API
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      baseURI, // Use baseURI variable here
      {
        model: "meta/llama3-70b-instruct",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, // Use apiKey variable here
        },
      }
    );

    // Send back the bot's response
    const botReply = response.data.choices[0]?.message?.content || 'Sorry, I couldn\'t understand that.';
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching response from API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
