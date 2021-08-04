import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();

/** Middleware */
app.use(cors());
app.use(morgan('combined'));

/** Routes */
app.use('/api/', routes);

export default app;