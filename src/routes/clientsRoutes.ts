import { clientsController } from '../controllers/clientsController';
import express from 'express';

const clientsRoutes = express.Router();

// TODO retirar rotas de clientes
clientsRoutes.get('/', clientsController.getAllClients.bind(clientsController));
clientsRoutes.get('/:cpf', clientsController.getClientByCPF.bind(clientsController));
// ClientsRoutes.post("/", clientsController.createClient.bind(clientsController));

export { clientsRoutes };
