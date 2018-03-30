import loglevel from 'loglevel';
import loglevelMessagePrefix from 'loglevel-message-prefix';

import uuidV1 from 'uuid/v1';

export default class Logger {
  /**
   * Logger initialize
   */
  static init() {
    this.configure();
    Logger.loggerImpl.debug('Logger have been initialized.');
  }
  /**
   * Logger get SessionId
   * @returns {string} セッションID
   */
  static get sessionId() {
    return Logger.currentSessionId;
  }
}
