import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cros Origin Resource Sharing
app.use(cors());

app.get('/', (req, res) => res.send('Hello world'));

export default app;