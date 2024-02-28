const { db } = require('@vercel/postgres');

async function query(client, query = 'SELECT * FROM users LIMIT 1') {
  const res = await client.query(query);
  console.log(
    // '--- Query result: ---\n', 
    `Rows affected: ${res.rowCount} \n`, 
    res.rows,
    '\n'
    // '\n--- Query complete! ---',
  );
}

async function debugQuery(client, query = 'SELECT * FROM users LIMIT 1') {
    const res = await client.query(query);
    console.log('--- Debug result: ---\n', res, '\n--- Debugging complete! ---');
}

async function main() {
  const client = await db.connect();
  
  // await debugQuery(client);
  await query(client);
  
  await client.end();
}

main().catch((err) => {
  console.error('--- ERROR ---\n', err, '\n--- END ERROR ---');
  process.exit(1);
});
