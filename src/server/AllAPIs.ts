import express from 'express';
import { FastAPI } from 'fastapi';

// Python FastAPI Implementation
const pythonApp = new FastAPI();

pythonApp.get('/python/hello', async (req, res) => {
  return { message: 'Hello World' };
});

// Node.js Express Implementation
const nodeApp = express();

nodeApp.get('/node/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});
