import express from 'express';
import ClientController from '../controllers/Clinet';
const router: express.Router = express.Router();


//look up a single client
router.get('/lookup', ClientController.lookupClient);
//look up a single client
router.get('/lookupWithId', ClientController.lookUpClientWithId);
//look up all client
router.get('/lookup/all', ClientController.lookupAllClient);
//delete client
router.delete('/delete', ClientController.deleteClient);

router.post('/sendCasualMail', ClientController.sendMail);
router.put('/upate/Id', ClientController.updateId);
router.put('/upate/bankDetails', ClientController.updateBankDetail);
router.put('/upate/cardDetails', ClientController.updateCarDetails);
router.put('/upate/balance', ClientController.UpdateAccountBalance);
router.put('/upate/profit', ClientController.UpdateProfit);
router.put('/upate/emailAndTel', ClientController.updateEmailAndTel);
router.put('/upate/personalDetails', ClientController.updatePersonalDetail);
router.put('/upate/personalDetailsSettings', ClientController.updatePersonalDetailSetting);
router.put('/upate/emailAndPassword', ClientController.updateEmailAndPassword);
router.put('/upate/resetpassword', ClientController.resetPassword);
router.put('/upate/warnCandidate', ClientController.warnCandidate);
router.put('/upate/RemoveWarnCandidate', ClientController.RemoveWarnCandidate);



export default router;
