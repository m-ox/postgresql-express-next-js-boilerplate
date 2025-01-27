import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './drizzle/schemas',
  out: './drizzle/migrations',
  dbCredentials: {
    database: process.env.POSTGRES_DB || 'burnedout',
    connectionString: process.env.DB_URL || '',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.POSTGRES_USERNAME || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '12345burnedout54321',
    ssl: false
  }
})
 