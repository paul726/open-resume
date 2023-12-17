import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const gptapiUrl = "https://api.gptapi.us/v1/chat/completions"
const apiKey = "sk-mKFNmC4SFOHIK6iLAdA4Fc1cF66c490d9758B109Cc41B979"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const bodyData = await req.body;
    const result = await axios.post(gptapiUrl, {
      model: "gpt-4",
      messages: [
        { role: "system", content: "Here is a resume in JSON format. Please analyze the content and optimize it for its role, focusing on clarity, impact, and relevance. Enhance the descriptions, highlight key achievements, and ensure the skills and experiences align with typical requirements for a software engineering position. Please maintain the JSON structure in your response." }, 
        { role: "user", content: bodyData['resume'] },
        { role: "user", content: bodyData['jd']}
      ],
        
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    res.status(200).json(result.data.choices[0].message.content)
    console.log(result.data.choices[0].message.content);

    // const completion = await openai.chat.completions.create({
    //   messages: [bfgn v
    //     {
    //       role: "system",
    //       content: "Here is a resume in JSON format. Please analyze the content and optimize it for its role, focusing on clarity, impact, and relevance. Enhance the descriptions, highlight key achievements, and ensure the skills and experiences align with typical requirements for a software engineering position. Please maintain the JSON structure in your response."
    //     },
    //     { role: "user", content: prompt['message'] },
    //   ],
    //   model: "gpt-3.5-turbo-16k",
    //   response_format: { type: "json_object" },
    // });
    // res.status(200).json(completion.choices[0].message.content)
    // console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  };
}
