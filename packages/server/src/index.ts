import express from 'express';
import registerRoutes from './routes';
import handleHealthCheck from './utilities/handleHealthCheck';
import logger from './utilities/logger.util';

const PORT = 8081;
const app = express();

async function startServer() {
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  // default path for the API
  app.get('/', (req, res) => {
    // TODO: refactor this out to a middleware for simplicity
    // - log every route hit
    logger.info('hitting the root path => /');
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
