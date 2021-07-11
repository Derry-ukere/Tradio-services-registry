import express, {ErrorRequestHandler} from 'express';
import cors from 'cors';
import authRoutes from './auth';
import serviceRoute from './services';
import uploadRoute from './upload';

const router: express.Router = express.Router();

router.use(cors());


 

router.use('/api/auth',authRoutes); 
router.use('/api/client',serviceRoute); 
router.use('/api/upload',uploadRoute); 





router.use('/health', (req, res) => {
  res.send({ status: 'OK' });
});

// eslint-disable-next-line no-unused-vars
const handleRouteError : ErrorRequestHandler = (error, req, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });

};

router.use(handleRouteError);


export default router;
