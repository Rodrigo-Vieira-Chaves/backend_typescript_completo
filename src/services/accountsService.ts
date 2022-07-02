import { AccountCreateDTO } from '../models/DTOs/AccountCreateDTO';
import { AccountDTO } from '../models/DTOs/AccountDTO';
import { EmptyError } from '../errors/EmptyError';
import { Service } from './Service';
import { TransactionType } from '../models/TransactionType';
import { accountsDAO } from '../repositories/DAOs/accountsDAO';
import { accountsPropertiesValidator } from '../validators/accountsPropertiesValidator';
import { clientsService } from './clientsService';
import { generateRandomAccount } from '../utils/generateRandomAccount';

class AccountsService extends Service
{
    async getAccountByID (accountID: string)
    {
        const result = await accountsDAO.getAccountByID(accountID);

        return this.serviceResponseBuilder(result, `A conta ${accountID} não existe.`);
    }

    async getAccountByBranchAndNumber (account: AccountDTO)
    {
        accountsPropertiesValidator.validateBranch(account.branch);
        accountsPropertiesValidator.validateBranchDigit(account.branchDigit);
        accountsPropertiesValidator.validateAccountNumber(account.accountNumber);
        accountsPropertiesValidator.validateAccountNumberDigit(account.accountNumberDigit);
        const result = await accountsDAO.getAccountByBranchAndNumber(account);

        return this.serviceResponseBuilder(result, 'Não existe conta com os dados que foram passados.');
    }

    async getAllAccounts ()
    {
        const result = await accountsDAO.getAllAccounts();

        return this.serviceResponseBuilder(result, 'Não existem contas cadastradas.');

    }

    async getAccountBalance (accountID: string)
    {
        const result = await accountsDAO.getAccountBalance(accountID);

        return this.serviceResponseBuilder(result, `A conta ${accountID} não existe.`);
    }

    async createAccount (newAccount: AccountCreateDTO)
    {
        accountsPropertiesValidator.validateAccountPassword(newAccount.password);

        let clientID = '';
        try
        {
            clientID = (await clientsService.getClientByCPF(newAccount.client.cpf)).data.clientID as string;
        }
        catch (error)
        {
            if (!(error instanceof EmptyError))
            {
                throw error;
            }

            clientID = (await clientsService.createClient(newAccount.client)).data.clientID as string;
        }

        const randomAccount = generateRandomAccount();
        randomAccount.password = newAccount.password;

        const result = await accountsDAO.createAccount(clientID, randomAccount);

        return this.serviceResponseBuilder(result, 'Erro ao inserir conta.', 201);
    }

    async updateAccountBalance (accountID: string, transactionType: TransactionType, ammount: number)
    {
        const accountBalance = (await this.getAccountBalance(accountID)).data.balance as number;

        switch (transactionType)
        {
            case TransactionType.DEPOSITO:
            case TransactionType.RECEBIMENTO_TRANSFERENCIA:
                await accountsDAO.updateAccountBalance(accountID, accountBalance + ammount);
                break;
            case TransactionType.SAQUE:
            case TransactionType.TAXA_DE_SAQUE:
            case TransactionType.TAXA_DE_DEPOSITO:
            case TransactionType.TAXA_DE_TRANSFERENCIA:
            case TransactionType.ENVIO_TRANSFERENCIA:
                await accountsDAO.updateAccountBalance(accountID, accountBalance - ammount);
                break;
            default:
                break;
        }
    }
}

const accountsService = new AccountsService();
export { accountsService };
