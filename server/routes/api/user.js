
import Router from 'express';
import { verifyToken } from '../../middleware/auth.js';
import { usercontrollers } from '../../controllers/user.js';
import {usersValidation, usersloginValidation} from '../../middleware/validators/usersValidation.js';

const router = Router();

router.post('/signUp',usersValidation.usersvalidation, usercontrollers.createAccount);

router.delete('/deleteUser/:id',verifyToken.checkAdmin, usercontrollers.deleteUser);
export default router;