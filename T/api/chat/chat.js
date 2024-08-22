import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment variables
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const messages = req.body; // Get the messages array from the request body

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo", // Use the appropriate model
        messages: messages, // Send the messages array to the API
      });

      // Extract the assistant's reply from the OpenAI response
      const assistantMessage = response.data.choices[0].message.content;

      res.status(200).json({ message: assistantMessage });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      res.status(500).json({ message: "Error generating response" });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
