
import Router from 'express';
import { verifyToken } from '../../middleware/auth.js';
import { usercontrollers } from '../../controllers/user.js';
import {usersValidation, usersloginValidation} from '../../middleware/validators/usersValidation.js';

const router = Router();

router.post('/signUp',usersValidation.usersvalidation, usercontrollers.createAccount);


router.get('/', verifyToken.checkAdmin, usercontrollers.getUsers);

router.post('/login',usersloginValidation.usersvalidation, usercontrollers.login);

export default router;