const fs = require('fs');
const https = require('https');

const options = {
  hostname: 'www.pinho.com.br',
  port: 443,
  path: '/wp-content/uploads/2023/10/banner-pinho.mp4',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Referer': 'https://www.pinho.com.br/',
    'Accept': '*/*'
  }
};

const file = fs.createWriteStream('public/images/banner-pinho.mp4');
https.get(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to get MP4. Status: ${res.statusCode}`);
    return;
  }
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Successfully downloaded Pinho MP4');
  });
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
