import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from "airtable";


//-------------------------------------------




const configuration = {
    organization: "org-Igci1c0Vs3AAiblvses9hFFs",
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);


var OutputSummary = {}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) { //Airtable request to an array of strings, then arrange strings into individual message objects, then summarize
  if (req.method === 'GET') {
    // Process a GET request for GPT summary of AirTable Data

      

   //Insert ForEach loop to add each Airtable entry as a new single message object
    
      
     const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a SummaryGPT, you summarize the overall emotions and details of a conversation." },
      { role: "assistant", content: "The following are a collection of thoughts about collective consciousness."}, 
     OutputSummary
      
    ],
        model: "gpt-3.5-turbo-16k",
      });
    
      console.log(completion.choices[0]);


      return  res.json(completion.choices[0]);
    }
    
    




  }// else {
    // Handle any other HTTP method
  //}
 