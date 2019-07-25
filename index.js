  
const request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR167NVzmRPLngqPjna9K8IRdBJppfCCVIVOW1NEia5FmYxhJUl8SnJW4xY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(JSON.stringify(body));
  
});
