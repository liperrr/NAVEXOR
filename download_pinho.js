const https = require('https');
const fs = require('fs');

https.get('https://www.pinho.com.br/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { 
    fs.writeFileSync('pinho.html', data); 
    console.log('Downloaded pinho.html');
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
