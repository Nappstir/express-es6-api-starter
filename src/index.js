import app from './config/express';
import { port, env } from './config/vars';

app.listen(port, () => console.info(`Server is now listening on ${port} (${env})`));

export default app;