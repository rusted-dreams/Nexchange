import express from 'express';
import * as user from '../controllers/userController.js';

const router = express.Router();

router.route('/create-account')
    .post(user.createAccount);

router.route('/activate-user')
    .post(user.activateUser);

    
export default router;