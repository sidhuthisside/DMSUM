const https = require('https');

const postData = JSON.stringify({
  model: 'llama3-70b-8192',
  messages: [
    { role: 'system', content: 'hello' },
    { role: 'user', content: 'yo' }
  ]
});

const options = {
  hostname: 'api.groq.com',
  path: '/openai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log('BODY:', data); });
});

req.on('error', (e) => { console.error(`problem with request: ${e.message}`); });
req.write(postData);
req.end();
