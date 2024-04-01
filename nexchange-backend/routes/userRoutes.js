import express from 'express';
import * as user from '../controllers/userController.js';

const router = express.Router();

router.route('/create-account')
    .post(user.createAccount);

export default router;