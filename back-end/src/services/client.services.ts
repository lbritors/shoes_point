import { CreateClient, UpdateClient } from "../protocols/client.protocol";
import { conflictError} from "../errors/conflict-error";
import { clientRepository } from "../repositories/client.repository";
import { notFoundError } from "../errors/not-found-error";
export async function create(client: CreateClient) {  
  const clientExists = await clientRepository.getClientsByCpf(client.cpf);
  if (clientExists && client.cpf === clientExists.cpf) {
    throw conflictError();
  }
  const createdClient = await clientRepository.create(client);
  return createdClient;
}

export async function getClients() {
  const clients = await clientRepository.getClients();
  return clients;
}

export async function getClientsByCpf(cpf: string) {
  const clients = await clientRepository.getClientsByCpf(cpf);
  return clients;
}

export async function getClientById(id: number) {
  const client = await clientRepository.getClientById(id);
  if (!client) {
    throw notFoundError();
  }
  return client;
}

export async function updateClient(id: number, client: UpdateClient) {
  const { cpf, name, phone } = client;
  const usuarioEditado: { cpf?: string; name?: string; phone?: string} = {};
  if (cpf) usuarioEditado.cpf = cpf;
  if (name) usuarioEditado.name = name;
  if (phone) usuarioEditado.phone = phone;
  const clientExists = await clientRepository.getClientById(id);
  if (!clientExists) {
    throw notFoundError();
  }
  const updatedClient = await clientRepository.updateClient(id, usuarioEditado);
  return updatedClient;
}

export async function deleteClient(id: number) {
  const clientExists = await clientRepository.getClientById(id);
  if (!clientExists) {
    throw notFoundError();
  }
  await clientRepository.deleteClient(id);
}

export const clientService = {
  create,
  getClients,
  getClientsByCpf,
  getClientById,
  updateClient,
  deleteClient,
};