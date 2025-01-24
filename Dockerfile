FROM oven/bun:latest AS base
WORKDIR /app/next-burnedout

COPY package.json bun.lockb ./
COPY .env ./

RUN bun install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD bun run dev
