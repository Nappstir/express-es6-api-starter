import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

// request logging. dev: console | production: file
app.use(morgan('dev'));

// gzip compression
app.use(compression());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cros Origin Resource Sharing
app.use(cors());

export default app;