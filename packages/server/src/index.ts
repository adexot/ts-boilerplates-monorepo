import express from 'express';
import registerRoutes from './routes';
import handleHealthCheck from './utilities/handleHealthCheck';
import logger from './utilities/logger.util';
import requestLogger from './utilities/requestLogger';

const PORT = 8081;
const app = express();

async function startServer() {
  // parse application/json header
  app.use(express.json());
  // parse application/x-www-form-urlencoded header
  app.use(express.urlencoded({ extended: true }));
  // log incoming request to the server
  app.use(requestLogger);

  // default path for the API
  app.get('/', (req, res) => {
    res.send('Welcome to the react-node-monorepo');
  });

  app.get('/health', handleHealthCheck);

  // api routes register
  registerRoutes(app);

  app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
  });
}

const logErrorAndExit = (err: ErrorEvent) => {
  logger.error(err);
  process.exit();
};

// init server
startServer().catch(logErrorAndExit);
