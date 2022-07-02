import { AccountDTO } from '../models/DTOs/AccountDTO';

function generateRandomAccount (): AccountDTO
{
    return {
        branch: Math.floor(Math.random() * 10000),
        branchDigit: Math.floor(Math.random() * 10),
        accountNumber: Math.floor(Math.random() * 100000000),
        accountNumberDigit: Math.floor(Math.random() * 10),
    };
}

export { generateRandomAccount };
