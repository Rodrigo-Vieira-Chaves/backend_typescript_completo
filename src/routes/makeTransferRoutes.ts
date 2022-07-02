import express from 'express';
import { transactionsController } from '../controllers/transactionsController';

const makeTransferRoutes = express.Router();

makeTransferRoutes.post('/', transactionsController.makeTransfer.bind(transactionsController));

export { makeTransferRoutes };
