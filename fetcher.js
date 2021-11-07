const request = require('request');
const fs = require("fs")
const URL = process.argv[2];
const filePath =process.argv[3];
console.log(URL);
console.log(filePath);

request(`${URL}`, (error, response, body) => {
  //save page to local disc
  fs.writeFile(filePath, body , function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved 3261 bytes to ${filePath}`);
  }); 
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});
