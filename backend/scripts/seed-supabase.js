// backend/scripts/seed-supabase.js
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

(async function main() {
  const sqlFile = process.argv[2] || path.join(__dirname, '..', 'jobly.sql');
  if (!fs.existsSync(sqlFile)) {
    console.error('SQL file not found:', sqlFile);
    process.exit(1);
  }
  const sql = fs.readFileSync(sqlFile, 'utf8');

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    // Optional: extend timeout for large files
    await client.query(`SET statement_timeout = '5min'`);
    await client.query(sql); // node-postgres supports multi-statement queries
    console.log(' Seed complete');
  } catch (err) {
    console.error('Seed failed:', err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();
