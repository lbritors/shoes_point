//implement client controller
import { Request, Response } from "express";
import { CreateClient, UpdateClient } from "../protocols/client.protocol";
import { clientService } from "../services/client.services";
import httpStatus from "http-status";

export async function createClient(req: Request, res: Response) {
  const client: CreateClient = req.body;
  try {
    const createdClient = await clientService.create(client);
    res.status(httpStatus.CREATED).send(createdClient);
    
  } catch (err) {
    if (err.name === "ConfictError") {
      res.status(httpStatus.CONFLICT).send(err.message);
    }
  }
}

export async function getClientById(req: Request, res: Response) {
  const id = +req.params.id;
  const client = await clientService.getClientById(id);
  res.status(httpStatus.OK).send(client);
}

export async function getClients(req: Request, res: Response) {
  const clients = await clientService.getClients();
  res.status(httpStatus.OK).send(clients);
}

export async function updateClient(req: Request, res: Response) {
  const id = +req.params.id;
  const client: UpdateClient = req.body;
  try {
    const updatedClient = await clientService.updateClient(id, client);
    res.status(httpStatus.OK).send(updatedClient);
    
  } catch (err) {
    if (err.name === "NotFoundError") {
      res.status(httpStatus.NOT_FOUND).send(err.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function deleteClient(req: Request, res: Response) {
  const id = +req.params.id;
  try {
    await clientService.deleteClient(id);
    res.status(httpStatus.NO_CONTENT).send();
    
  } catch (err) {
    if (err.name === "NotFoundError") {
      res.status(httpStatus.NOT_FOUND).send(err.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
  
}

export const clientController = {
  createClient,
  getClientById,
  getClients,
  updateClient,
  deleteClient,
};