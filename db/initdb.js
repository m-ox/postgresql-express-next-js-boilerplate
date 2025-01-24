import { db } from '../api/pool';

export async function initDatabase(db) {

    await db.execute('CREATE SCHEMA IF NOT EXISTS burnedout');

    await db.execute(`
        CREATE TABLE IF NOT EXISTS burnedout.users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL
        );
    `);
    
    console.log('Database initialized with schema and tables.');
}
  