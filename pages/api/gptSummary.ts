import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'

import { getRecentTextEntries } from "../../hooks/airtableRead";
import Airtable from "airtable";


//-------------------------------------------

interface GenText {
  Text:string | null
}

export const config = {
	runtime: 'edge',
  unstable_allowDynamic: [
    './node_modules/airtable/lib/airtable.umd.js', // allows a single file
    // use a glob to allow anything in the function-bind 3rd party module
  ],
};

const configuration = {
    organization: "org-Igci1c0Vs3AAiblvses9hFFs",
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

// interface GPTMessage{
//   role: string;
//   content: string;
// };


//var Output = { role: "system", content: "Without getting too in depth, summerize the preceding entries." };



export default async function handler(req: NextApiRequest, res: NextApiResponse<GenText>) { //Airtable request to an array of strings, then arrange strings into individual message objects, then summarize

  if (req.method != 'GET') { // if we use anything besides GET we should split this into many functinos.
      const message = "API request must be a GET request!";
      console.log(message);;
      return res.status(200).json({Text: message});
  }

  var AirtableData  = await getRecentTextEntries(10);

  console.log("Done");
  console.log(AirtableData);


  if(AirtableData.length === 0){
      const message = "Cannot get entries from database";
      console.log(message);
      return res.status(200).json({Text: message});
  }

  // initial message to give context.
  var MessageArray = [];
  AirtableData.forEach(function(entry){
    MessageArray.push({"role": "user", "content": entry});
  });
  MessageArray.push({"role": "system", "content": "Summerize the ideas in a sentence or less."});

  console.log(MessageArray);

  var completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages : MessageArray,
    temperature: 0,
  });
  console.log(completion);
  console.log(completion.choices[0].message.content);

  return  res.status(200).json({Text: completion.choices[0].message.content});
}