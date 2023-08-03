var fs = require('fs');
var path = require('path');

function base64ToPNG(data) {
  data = data.replace(/^data:image\/png;base64,/, '');

  fs.writeFile(__dirname, '/saved/signature.png', data, 'base64', function(err) {
    if (err) throw err;
  });
}

module.exports = base64ToPNG;