import React from "react"
import Airtable from "airtable"

var base = new Airtable({apiKey: 'patbFu1cGoehv5k7B.72c1dd089560234fb6a5aa60eb1da03680756dd4ae27452cabddc027f23f06aa'}).base('appNr8Gh1Gkr6FFNV');

export function sendTextInput(text: string) {
    if(text === 'clear records'){
        // for developer use ... not working yet.

        base('Tasks').destroy(['recghCVQqdXDEH2k9', 'recf9eADP1EgC8HuT'], function(err, deletedRecords) {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Deleted', deletedRecords.length, 'records');
          });

    }
    console.log("Input", text);
    base('Tasks').create([
        {
          "fields": {
            "Name": text.toString()
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('Name'));
        });
      });
    }

//          "id": "recghCVQqdXDEH2k9",