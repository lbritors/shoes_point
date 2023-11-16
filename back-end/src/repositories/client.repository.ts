import { Client, CreateClient, UpdateClient } from "../protocols/client.protocol";
import { prisma } from "../database";

export async function create(client: CreateClient) {
  const createdClient = await prisma.client.create({
    data: client,
  });
  return createdClient;
}

export async function getClientById(id: number) { 
  const client = await prisma.client.findUnique({
    where: {
      id: id,
    },
  });
  return client;
}

export async function getClients() {
  const clients = await prisma.client.findMany();
  return clients;
}

export async function getClientsByCpf(cpf: string) {  
  const clients = await prisma.client.findUnique({
    where: {
      cpf: cpf,
    },
  });
  return clients;
}

export async function updateClient(id: number, client: UpdateClient) {
  const updatedClient = await prisma.client.update({
    where: {
      id: id,
    },
    data: {
      name: client.name,
      cpf: client.cpf,
      phone: client.phone,
      updatedAt: new Date(),
    },
    }
  );
  return updatedClient;
}

export async function deleteClient(id: number) {
  await prisma.client.delete({
    where: {
      id: id,
    },
  });
}

export const clientRepository = {
  create,
  getClientById,
  getClients,
  getClientsByCpf,
  updateClient,
  deleteClient,
};