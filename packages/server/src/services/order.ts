import logger from '../utilities/logger.util';

/* eslint-disable class-methods-use-this */
// FIXME: move this types to a separate file
type Token = 'ETH' | 'USDT' | 'DVF';
type Store = Record<string, any>;

/** Handles the logic for Order */
export default class OrderService {
  store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  async deposit(amount: number, token: Token): Promise<number> {
    logger.info('DEPOSIT => ', { amount, token });
    if (amount < 1) {
      throw new Error('amount cannot be less than 1');
    }

    return amount;
  }
}
