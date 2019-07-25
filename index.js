const https = require('https');

https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR167NVzmRPLngqPjna9K8IRdBJppfCCVIVOW1NEia5FmYxhJUl8SnJW4xY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.stringify(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// OR

// const request = require('request');

// request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR167NVzmRPLngqPjna9K8IRdBJppfCCVIVOW1NEia5FmYxhJUl8SnJW4xY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(JSON.stringify(body));
  
// });
