import { Express } from 'express';
import { accountsRoutes } from './accountsRoutes';
import { clientsRoutes } from './clientsRoutes';
import { createAccountRoutes } from './createAccountRoutes';
import { makeDepositRoutes } from './makeDepositRoutes';
import { makeTransferRoutes } from './makeTransferRoutes';
import { makeWithdrawRoutes } from './makeWithdrawRoutes';
import { requestAccountStatementRoutes } from './requestAccountStatementRoutes';
import { transactionsRoutes } from './transactionsRoutes';

class RoutesList
{
    initRoutes (app: Express)
    {
        // TODO retirar, apenas para testes
        app.use('/clients', clientsRoutes);
        // TODO retirar, apenas para testes
        app.use('/accounts', accountsRoutes);
        // TODO retirar, apenas para testes
        app.use('/transactions', transactionsRoutes);

        app.use('/createAccount', createAccountRoutes);
        app.use('/makeDeposit', makeDepositRoutes);
        app.use('/makeWithdraw', makeWithdrawRoutes);
        app.use('/makeTransfer', makeTransferRoutes);
        app.use('/requestAccountStatement', requestAccountStatementRoutes);
    }
}

const routesList = new RoutesList();
export { routesList };
