const fs = require('fs');
const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Port_of_Rotterdam.jpg/2560px-Port_of_Rotterdam.jpg';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

const file = fs.createWriteStream('public/images/port-4k.jpg');
https.get(url, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Status Code: ${res.statusCode}`);
    return;
  }
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Successfully downloaded 4K image');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
