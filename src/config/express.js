import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// request logging. dev: console | production: file
app.use(morgan('dev'));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cros Origin Resource Sharing
app.use(cors());

app.get('/', (req, res) => res.send('Hello world'));

export default app;