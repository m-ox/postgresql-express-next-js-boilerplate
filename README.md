Next JS, Express, Bun, Drizzle ORM, Postgres DB. Simple.

## Getting Started
Have Docker installed and be logged in on your terminal.

Basic:
To run frontend:
 - bun install
 - bun run start
   
To run full stack:
 - bun install
 - bun run db:init
 - bun run docker:up
 - bun run docker:down (when you're done)

Migration related commands:
 - bun run drizzle:generate
 - bun run drizzle:migrate

DB specific commands:
 - bun run db:isup to check if the db is up (just in case you are feeling crazy)
 - bun run db:up to only run the db
