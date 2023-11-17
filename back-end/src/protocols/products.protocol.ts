
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

export type CreateProduct = Omit<Product, "id" | "createdAt" | "updatedAt">;
export type UpdateProduct = {
  name?: string;
  price?: number;
  quantity?: number;
  size?: string;
  categoriesId?: number;
}