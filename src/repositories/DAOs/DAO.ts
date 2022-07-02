import { database } from '../database';

class DAO
{
    protected executeSQL<T> (sql: string, parameters: any[])
    {
        return new Promise<T[]>((resolve, reject) =>
        {
            database.all(sql, parameters, (err, rows) =>
            {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(rows);
                }
            });
        });
    }
}

export { DAO };
