const axios = require("axios");

exports.checkFreelancer = async (req, res) => {

  try {

    const { text } = req.body;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: `You are an AI freelance evaluator.

Analyze this freelancer proposal or GitHub description.

Text:
${text}

Return short response:

Quality Score (1-10)
Risk Level (Low/Medium/High)
Short Feedback`
          }
        ],

        max_tokens: 150
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data.choices[0].message.content);

  } catch (err) {

    console.log(err);
    res.status(500).json({ error: "AI trust check failed" });

  }
};