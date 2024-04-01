import express from 'express';
import { createAccount } from '../controllers/userController.js';
import { activateUser } from '../controllers/userController.js';
const router = express.Router();

router.route('/create-account')
    .post(createAccount);

export default router;