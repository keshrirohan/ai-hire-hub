const axios = require("axios");

exports.generateMilestones = async (req, res) => {

  try {

    const { idea } = req.body;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: `Give 5 short development milestones for this idea:\n${idea}`
          }
        ],

        max_tokens: 120
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;

    res.json(result);

  } catch (error) {

    console.log("AI ERROR:", error.response?.data || error.message);

    res.status(500).json({ error: "AI generation failed" });

  }

};