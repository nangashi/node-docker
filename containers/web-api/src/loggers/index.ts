import log4js from 'log4js';

import config from 'config';

log4js.configure(config.log4js);

export default log4js.getLogger();
