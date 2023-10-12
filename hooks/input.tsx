
import Airtable from "airtable"




var tableWrite = new Airtable({apiKey: process.env.AIRTABLE_WRITE_TOKEN}).base('appNr8Gh1Gkr6FFNV');

export function sendTextInput(text: string) {
    if(text === 'clear records'){
        // for developer use ... not working yet.

        tableWrite('Tasks').destroy(['recghCVQqdXDEH2k9', 'recf9eADP1EgC8HuT'], function(err, deletedRecords) {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Deleted', deletedRecords.length, 'records');
          });

    }

    console.log("Input: ", text);
    tableWrite('Tasks').create([
        {
          "fields": {
            "Name": text.toString(),
            "Time": Date.now(),
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('Name'), record.get('Time'));
        });
      });
    }

//          "id": "recghCVQqdXDEH2k9",

