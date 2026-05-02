const apiKey = process.argv[2];

async function test() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
  );
  const data = await response.json();
  console.log(data.models.map(m => m.name));
}

test();
