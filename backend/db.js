"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

// keep TLS, skip CA verification (needed for many local/VPN setups with Supabase pool)
const db = new Client({
  connectionString: getDatabaseUri(),
  ssl: { require: true, rejectUnauthorized: false },
});

db.connect();

module.exports = db;

