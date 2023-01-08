import logger, { Logger } from '../utilities/logger.util';

export default class BaseService {
  logger: Logger;

  constructor() {
    this.logger = logger;
  }
}
