import express, {ErrorRequestHandler} from 'express';
import cors from 'cors';
import authRoutes from './auth';
const router: express.Router = express.Router();

router.use(cors());


 

router.use('/api/auth',authRoutes); 


router.use('/health', (req, res) => {
  res.send({ status: 'OK' });
});

// eslint-disable-next-line no-unused-vars
const handleRouteError : ErrorRequestHandler = (error, req, res) => {
  res.status(error.status || 500);
  console.error(error);
  return res.json({
    error: {
      message: error.message,
    },
  });

};

router.use(handleRouteError);


export default router;
