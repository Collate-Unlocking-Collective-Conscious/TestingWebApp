import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'



//-------------------------------------------

const openai = new OpenAI();


 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a GET request for GPT summary of AirTable Data



   openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });



  } else {
    // Handle any other HTTP method
  }
}