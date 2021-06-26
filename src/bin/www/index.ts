import errorHandler from 'errorhandler';
import app from '../../app';
import { Logger } from '../../helpers';
import connectDB from '../../lib/db';
 
app.use(errorHandler()); 

(async () => {
  // const port = app.get('port');

  await connectDB() 
    .then(() => {
      // Initializure server
      const server = app.listen(process.env.APP_PORT || 7000);

      server.on('listening',()=>{
        Logger.info(`Hi there! I'm listening on port 7000  in ${app.get('env')} mode.`,);
      });
      // Nodemon dev hack
      process.once('SIGUSR2', function() {
        server.close(function() {
          process.kill(process.pid, 'SIGUSR2');
        });
      });
    })
    .catch(error => {
      Logger.error('(TypeORM) Database connection error: ', error);
    });
})();
 
