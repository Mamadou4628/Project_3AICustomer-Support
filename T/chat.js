// pages/api/chat.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { messages } = req.body;
      // Handle the chat logic here
      res.status(200).json({ response: 'Chat response here' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  