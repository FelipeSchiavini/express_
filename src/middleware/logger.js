const logger = require('../services/logger');

const loggerMidd = (req, res, next) => {
  logger.info(`method ${req.method} -- path:${req.path}`);
  next();
};

module.exports = loggerMidd