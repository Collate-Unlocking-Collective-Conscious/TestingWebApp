import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'

import { getRecentTextEntries } from "./airtableRead";
import Airtable from "airtable";


//-------------------------------------------

interface GenText {
  Text:string | null
}


const configuration = {
    organization: "org-Igci1c0Vs3AAiblvses9hFFs",
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

var MessageObject = {role:"user" , content: ''}
var MessageArray = []
var AirTableData = [];
var Output = { role: "system", content: "Summerize the previous entries in a sentence." };

export default async function handler(req: NextApiRequest, res: NextApiResponse<GenText>) { //Airtable request to an array of strings, then arrange strings into individual message objects, then summarize

  if (req.method === 'GET') {
    // Process a GET request for GPT summary of AirTable Data

    AirTableData = getRecentTextEntries(10);

   //Insert ForEach loop to add each Airtable entry as a new single message object

    if(Airtable.length > 0){
      console.log(AirTableData);

    }else{
      console.log("Airtable rate limit reached ... please wait a minute");
    }
      
   AirTableData.forEach(function(entry){
      MessageObject.content = entry;
      MessageArray.push(MessageObject)
    });

     MessageArray.push(Output);
     const completion = await openai.chat.completions.create({
        messages : MessageArray,
        model: "gpt-3.5-turbo-16k",
      });
      console.log(AirTableData);
      console.log(Output);
      console.log(completion.choices[0].message.content);

      return  res.status(200).json({Text: completion.choices[0].message.content});

   }else{
      console.log("Must use GET request");
   }

}