/* eslint-disable import/named */
/* eslint-disable import/extensions */
import Router from 'express';
import { verifyToken } from '../../middleware/auth.js';
import { usercontrollers } from '../../controllers/user.js';
import { usersValidation, usersloginValidation } from '../../middleware/validators/usersValidation.js';

const router = Router();
<<<<<<< HEAD
/**
 * @swagger
 * /users/signUp:
 *   post:
 *     tags:
 *       - Users
 *     name: SignUp
 *     summary: Creates a user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *         required:
 *                -name
 *                -email
 *                -password
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in use by another account.
 * */
router.post('/signUp',usersValidation.usersvalidation, usercontrollers.createAccount);

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     name: User
 *     summary: delete registered user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: User successfully deleted.
 *       404:
 *             description: User not found.
 *       500:
 *             description: server error.
 *       401:
 *             description: unauthorized
 * */
router.delete('/deleteUser/:id',verifyToken.checkAdmin, usercontrollers.deleteUser);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     name: User
 *     summary: fetch all Users
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: Users successfully fetched.
 *       401:
 *             description: unauthorized
 * */
router.get('/', verifyToken.checkAdmin, usercontrollers.getUsers);
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     name: Login
 *     summary: Login a registered user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *         required:
 *                -email
 *                -password
 *     responses:
 *       200:
 *             description: user logged in successfully.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: Invalid email or Password.
 * */
router.post('/login',usersloginValidation.usersvalidation, usercontrollers.login);

=======

router.post('/signUp', usersValidation.usersvalidation, usercontrollers.createAccount);

router.delete('/deleteUser/:id', verifyToken.checkAdmin, usercontrollers.deleteUser);

router.get('/', verifyToken.checkAdmin, usercontrollers.getUsers);

router.post('/login', usersloginValidation.usersvalidation, usercontrollers.login);
>>>>>>> applying ESlint

export default router;
