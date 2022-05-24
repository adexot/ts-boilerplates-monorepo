import express from 'express';
import registerRoutes from './routes';
import logger from './utilities/logger.util';

const PORT = 8081;
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  logger.info('hitting the root path => /');
  res.send('Welcome to the react-node-monorepo');
});

registerRoutes(app);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
