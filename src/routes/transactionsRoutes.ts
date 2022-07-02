import express from 'express';
import { transactionsController } from '../controllers/transactionsController';

const transactionsRoutes = express.Router();

// TODO, apenas para testes , retirar.
transactionsRoutes.get('/', transactionsController.getAllTransactions.bind(transactionsController));

export { transactionsRoutes };
