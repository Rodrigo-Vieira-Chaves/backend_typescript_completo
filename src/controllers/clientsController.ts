import { Request, Response } from 'express';
import { Controller } from './Controller';
import { clientsService } from '../services/clientsService';

class ClientsController extends Controller
{
    async getClientByCPF (req: Request, res: Response)
    {
        this.callService(res, clientsService.getClientByCPF.bind(clientsService), req.params.cpf);
    }

    async getAllClients (req: Request, res: Response)
    {
        this.callService(res, clientsService.getAllClients.bind(clientsService));
    }
}

const clientsController = new ClientsController();
export { clientsController };
