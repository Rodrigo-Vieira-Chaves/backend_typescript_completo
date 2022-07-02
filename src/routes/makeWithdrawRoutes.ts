import express from 'express';
import { transactionsController } from '../controllers/transactionsController';

const makeWithdrawRoutes = express.Router();

makeWithdrawRoutes.post('/', transactionsController.makeWithdraw.bind(transactionsController));

export { makeWithdrawRoutes };
