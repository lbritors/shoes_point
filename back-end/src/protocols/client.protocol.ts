//client type


export type Client = {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateClient = Omit<Client, "id" | "createdAt" | "updatedAt">;
export type UpdateClient = {
  name?: string;
  phone?: string;
  cpf?: string;
}
export type Orders = {
  id: number;
  totalValue: number;
  paidValue: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  clientId: number;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  categoriesId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Categories = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ApplicationError = {
  name: string;
  message: string;
}