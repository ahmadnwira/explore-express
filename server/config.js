const bunyan = require('bunyan');

const appName = 'Items';

module.exports = {
  applicationName: appName,
  logger: bunyan.createLogger({ name: appName }),
  mongodb: {
    url: 'mongodb://localhost:37017/items',
  },
};
