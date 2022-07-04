import express, { Express } from 'express';
import { accountsController } from '../controllers/accountsController';
import { transactionsController } from '../controllers/transactionsController';

class Routes
{
    initRoutes (app: Express)
    {
        app.use('/getAllAccounts', this.getAllAccounts());
        app.use('/createAccount', this.configCreateAccountRoutes());
        app.use('/makeDeposit', this.configMakeDepositRoutes());
        app.use('/makeWithdraw', this.configMakeWithdrawRoutes());
        app.use('/makeTransfer', this.configMakeTransferRoutes());
        app.use('/getStatements', this.configGetStatementsRoutes());
    }

    private getAllAccounts ()
    {
        const getAllAccountsRoutes = express.Router();
        getAllAccountsRoutes.get('/', accountsController.getAllAccounts.bind(accountsController));

        return getAllAccountsRoutes;
    }

    private configCreateAccountRoutes ()
    {
        const createAccountRoutes = express.Router();
        createAccountRoutes.post('/', accountsController.createAccount.bind(accountsController));

        return createAccountRoutes;
    }

    private configMakeDepositRoutes ()
    {
        const makeDepositRoutes = express.Router();
        makeDepositRoutes.post('/', transactionsController.makeDeposit.bind(transactionsController));

        return makeDepositRoutes;
    }

    private configMakeWithdrawRoutes ()
    {
        const makeWithdrawRoutes = express.Router();
        makeWithdrawRoutes.post('/', transactionsController.makeWithdraw.bind(transactionsController));

        return makeWithdrawRoutes;
    }

    private configMakeTransferRoutes ()
    {
        const makeTransferRoutes = express.Router();
        makeTransferRoutes.post('/', transactionsController.makeTransfer.bind(transactionsController));

        return makeTransferRoutes;
    }

    private configGetStatementsRoutes ()
    {
        const getStatementsRoutes = express.Router();
        getStatementsRoutes.get('/', transactionsController.getStatementsOfAccount.bind(transactionsController));

        return getStatementsRoutes;
    }
}

const routes = new Routes();
export { routes };
