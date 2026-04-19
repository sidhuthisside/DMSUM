export default async function test() {
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', { method: 'POST', headers: { 'Authorization': 'Bearer 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', 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{role:'user', content:'hello'}] }) });
  console.log(JSON.stringify(await r.json(), null, 2));
}
test();
