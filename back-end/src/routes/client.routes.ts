import { Router } from "express";
import { clientSchema, updateClientSchema } from "../schemas/client.schema";
import { schemaValidator} from "../middlewares/schema.middleware";
import { clientController } from "../controllers/client.controllers";


const clientRouter = Router();

clientRouter.get('/client', clientController.getClients);
clientRouter.post('/client', schemaValidator(clientSchema), clientController.createClient);
clientRouter.get('/client/:id', clientController.getClientById);
clientRouter.put('/client/:id', schemaValidator(updateClientSchema), clientController.updateClient);
clientRouter.delete('/client/:id', clientController.deleteClient);

export default clientRouter;