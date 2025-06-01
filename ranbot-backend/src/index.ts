import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './backend/routes/api';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// or, if needed:
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(cors());
app.use(express.json());

// Backend API routes
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});