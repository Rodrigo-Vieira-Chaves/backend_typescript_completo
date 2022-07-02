import express from 'express';
import { transactionsController } from '../controllers/transactionsController';

const requestAccountStatementRoutes = express.Router();

requestAccountStatementRoutes.get('/', transactionsController.getTransactionsFromAccount.bind(transactionsController));

export { requestAccountStatementRoutes };
