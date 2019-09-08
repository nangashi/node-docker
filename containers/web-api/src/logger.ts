/* eslint no-console: 0 */
import log4js from 'log4js';

import config from 'config';
console.log(JSON.stringify(config));
log4js.configure(config.log4js);

// replace console log
const logger = log4js.getLogger();
console.log = logger.info.bind(logger);
console.warn = logger.warn.bind(logger);
console.error = logger.error.bind(logger);

export default logger;
