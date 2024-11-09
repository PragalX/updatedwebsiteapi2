import express from 'express';
import cors from 'cors';
import { pythonApp, nodeApp, rubyApp } from './AllAPIs';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Mount the different API implementations
app.use('/python', pythonApp);
app.use('/node', nodeApp);
app.use('/ruby', rubyApp);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});