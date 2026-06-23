const fs = require('fs');
const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Port_of_Rotterdam.jpg/2560px-Port_of_Rotterdam.jpg';

const file = fs.createWriteStream('public/images/hero-bg.jpg');
https.get(url, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Successfully downloaded 4K image');
  });
});
