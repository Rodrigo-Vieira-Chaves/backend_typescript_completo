import { DAO } from './DAO';
import { TransactionDTO } from '../../models/DTOs/TransactionDTO';
import { TransactionType } from '../../models/TransactionType';
import { v4 as uuiv4 } from 'uuid';

class TransactionsDAO extends DAO
{
    getTransactionByID (transactionID: string)
    {
        const sql = `SELECT transactionID,
                            accountID,
                            type,
                            ammount,
                            createdAt
                    FROM transactions WHERE transactionID = ?`;

        return this.executeSQL<TransactionDTO>(sql, [ transactionID ]);
    }

    getTransactionsByAccountID (accountID: string)
    {
        const sql = `SELECT transactionID,
                            accountID,
                            type,
                            ammount,
                            createdAt
                    FROM transactions WHERE accountID = ?`;

        return this.executeSQL<TransactionDTO>(sql, [ accountID ]);
    }

    getTransactionsByType (type: TransactionType)
    {
        const sql = `SELECT transactionID,
                            accountID,
                            type,
                            ammount,
                            createdAt
                    FROM transactions WHERE type = ?`;

        return this.executeSQL<TransactionDTO>(sql, [ type ]);
    }

    getAllTransactions ()
    {
        const sql = `SELECT transactionID,
                            accountID,
                            type,
                            ammount,
                            createdAt
                    FROM transactions`;

        return this.executeSQL<TransactionDTO>(sql, []);
    }

    createTransaction (transaction: TransactionDTO)
    {
        const sql = 'INSERT INTO transactions VALUES (?, ?, ?, ?, ?) RETURNING *';

        return this.executeSQL<TransactionDTO>(sql,
            [
                uuiv4(),
                transaction.accountID,
                transaction.type,
                transaction.ammount,
                Date.now()
            ]);
    }
}

const transactionsDAO = new TransactionsDAO();
export { transactionsDAO };
