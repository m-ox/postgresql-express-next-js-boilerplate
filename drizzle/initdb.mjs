import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'burnedout',
  password: process.env.POSTGRES_PASSWORD || '12345burnedout54321',
  port: process.env.DB_PORT || 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
  console.log('Database connected successfully');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err);
});


const db = drizzle({ client: pool });

await db.execute('CREATE SCHEMA IF NOT EXISTS public');

await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
    );
`);

console.log('Database initialized with schema and tables.');
process.exit(0);