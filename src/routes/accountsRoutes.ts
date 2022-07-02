import { accountsController } from '../controllers/accountsController';
import express from 'express';

const accountsRoutes = express.Router();

accountsRoutes.get('/', accountsController.getAllAccounts.bind(accountsController));

export { accountsRoutes };
