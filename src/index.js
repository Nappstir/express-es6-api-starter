import app from './config/express';
import { port, env } from './config/vars';

app.get('/', (req, res) => res.send('Hello world'));
app.listen(port, () => console.info(`Server is now listening on ${port} (${env})`));

export default app;