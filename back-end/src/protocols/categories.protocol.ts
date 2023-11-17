//categorie protocol

export type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCategory = Omit<Category, "id" | "createdAt" | "updatedAt">;
export type UpdateCategory = {
  name: string;
}
