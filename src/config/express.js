import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import routes from '../api/routes/v1';

const app = express();

// request logging. dev: console | production: file
app.use(morgan('dev'));

// gzip compression
app.use(compression());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cros Origin Resource Sharing
app.use(cors());

// mount swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// mount API v1 routes
app.use('/v1', routes);

export default app;