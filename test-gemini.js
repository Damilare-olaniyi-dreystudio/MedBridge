const apiKey = process.argv[2];

async function test() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: "Hello" }] }]
      })
    }
  );
  console.log(response.status);
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

test();
