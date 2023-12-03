const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // Process the message here
    const botReply = 'This is a reply from your ChatBot.';
    
    // Send back the ChatBot's reply as JSON
    res.json({ reply: botReply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
