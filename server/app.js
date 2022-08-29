import express from 'express';
import dotEnv from 'dotenv';
import todoRouter from './routes/todoRoute.js';
import cors from 'cors';

const app = express();

dotEnv.config({ path: './.env' });

app.use(express.json());
app.use(cors());
app.use('/api/v1/todos', todoRouter);

export default app;
