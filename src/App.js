const express = require('express');
const bodyParser = require('body-parser');
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const app = express();
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { email, name, message } = req.body;

  try {
    // Send message to WhatsApp
    await client.messages.create({
      from: 'whatsapp:+14353391098',
      to: 'whatsapp:+2348133989645',
      body: `New message from ${name} (${email}): ${message}`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
