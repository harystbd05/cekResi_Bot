var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.rajaongkir.com/starter/city',
  qs: {id: '39', province: '5'},
  headers: {key: '2d867bbcc5c822867a526b445617511e'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});