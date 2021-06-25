import bunyan from 'bunyan';

const Logger = bunyan.createLogger({name: 'development', level : 'debug'});
Logger.info('from logger file'); 

export { Logger };

