import { AccountValidateDTO } from './AccountValidateDTO';

interface DepositOrWithdrawRequestDTO
{
  ammount: number;
  accountRequest: AccountValidateDTO;
}

export { DepositOrWithdrawRequestDTO };
