import { EmptyError } from '../errors/EmptyError';
import { ServiceResponse } from '../responses/ServiceResponse';

class Service
{
    protected serviceResponseBuilder (daoResult: any[], emptyMessage: string, successCode = 200)
    {
        if (daoResult.length <= 0)
        {
            throw new EmptyError(emptyMessage);
        }

        const data = daoResult.length === 1 ? daoResult.pop() : daoResult;

        return {
            code: successCode,
            data
        } as ServiceResponse;
    }
}

export { Service };
