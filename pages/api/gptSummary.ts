import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from "airtable";


//-------------------------------------------

const openai = new OpenAI();

var OutputSummary
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a GET request for GPT summary of AirTable Data

      //Airtable request to an array of strings, then arrange strings into individual message objects, then summarize

   
    
      
     const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a SummaryGPT, you summarize the overall emotions and details of a conversation." },
      { role: "assistant", content: "The following are a collection of thoughts about collective consciousness."}, 
    ],
        model: "gpt-3.5-turbo-16k",
      });
    
      console.log(completion.choices[0]);
    }
    
    




  }// else {
    // Handle any other HTTP method
  //}
 