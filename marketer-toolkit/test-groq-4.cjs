const fetch = require('node-fetch');

async function test() {
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer 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', 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'llama3-70b-8192', messages: [{role:'user', content:'yo'}] })
  });
  console.log(r.status);
  console.log(await r.json());
}
test();
