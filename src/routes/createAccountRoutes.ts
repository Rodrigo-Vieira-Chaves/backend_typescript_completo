import { accountsController } from '../controllers/accountsController';
import express from 'express';

const createAccountRoutes = express.Router();

createAccountRoutes.post('/', accountsController.createAccount.bind(accountsController));

export { createAccountRoutes };
