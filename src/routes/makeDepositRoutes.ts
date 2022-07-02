import express from 'express';
import { transactionsController } from '../controllers/transactionsController';

const makeDepositRoutes = express.Router();

makeDepositRoutes.post('/', transactionsController.makeDeposit.bind(transactionsController));

export { makeDepositRoutes };
