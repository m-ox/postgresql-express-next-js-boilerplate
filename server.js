import dotenv from 'dotenv';
import cors from 'cors'
import { db } from './api/pool';
import { initDatabase } from './db/initdb';
import express from "express";
import { serve } from 'bun';

dotenv.config();

const app = express();
      app.use(cors());

if (!process.env.DB_URL) {
  console.error('ERROR: Invalid DB_URL. Please check your .env file.');
  process.exit(1);
}

async function startServer() {
  try {
    await initDatabase(db);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

startServer();

serve({
  port: process.env.PORT || 3000,
  fetch(request) {
      return new Response(`Server running on port ${process.env.PORT}`);
  },
});