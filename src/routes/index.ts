import express, {ErrorRequestHandler} from 'express';
import cors from 'cors';
// import AuthServices from '../services/Auth';
// import { handleRouteError, } from '../handlers';
// import { Error } from 'mongoose';
import AuthController from '../controllers/Auth';
const router: express.Router = express.Router();
// const services = express();

router.use(cors());


 

router.use('/register',AuthController.registerUser); 
router.use('/login',AuthController.authenticateUser); 


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
