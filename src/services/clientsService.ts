import { ClientDTO } from '../models/DTOs/ClientDTO';
import { Service } from './Service';
import { clientsDAO } from '../repositories/DAOs/clientsDAO';
import { clientsPropertiesValidator } from '../validators/clientsPropertiesValidator';

class ClientsService extends Service
{
    async getClientByID (clientID: string)
    {
        const result = await clientsDAO.getClientByID(clientID);

        return this.serviceResponseBuilder(result, `O cliente ${clientID} não existe.`);
    }

    async getClientByCPF (cpf: string)
    {
        clientsPropertiesValidator.validateCPF(cpf);
        const result = await clientsDAO.getClientByCPF(cpf);

        return this.serviceResponseBuilder(result, `O cliente ${cpf} não existe`);
    }

    async getAllClients ()
    {
        const result = await clientsDAO.getAllClients();

        return this.serviceResponseBuilder(result, 'Não há clientes cadastrados.');
    }

    async createClient (client: ClientDTO)
    {
        clientsPropertiesValidator.validateAll(client);
        const result = await clientsDAO.createClient(client);

        return this.serviceResponseBuilder(result, 'Erro ao inserir cliente.', 201);
    }
}

const clientsService = new ClientsService();
export { clientsService };
