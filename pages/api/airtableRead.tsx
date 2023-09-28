import Airtable from "airtable"

var tableRead = new Airtable({apiKey: process.env.AIRTABLE_READ_TOKEN}).base('appNr8Gh1Gkr6FFNV');

export function getRecentTextEntries(count: number){

  var entries : string[] = [];
    tableRead('Tasks').select({
      maxRecords:  count,
      view: "Input Grid",
      offset:0,
      sort: [{field: "Time", direction: "desc"}],
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          var currentText = record.get('Name')?.toString();
          if(currentText != undefined){
            entries.push(currentText);
          } else {
            console.log("Error: airtable entry is returned as undefined");
          }
          //var currentTime = record.get('Time');
          //console.log(currentText, currentTime);
      });
  
      fetchNextPage();
  
  }, function done(err) {
      if (err) { console.error(err); return; }
  });

  return entries;
}