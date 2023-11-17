import { prisma } from "../database";
import { CreateProduct, UpdateProduct } from "../protocols/products.protocol";

export async function create(product: CreateProduct) {
  const createdProduct = await prisma.products.create({
    data: product,
  });
  return createdProduct;
}

export async function getProducts() {
  const products = await prisma.products.findMany();
  return products;
}

export async function getProductById(id: number) {
  const product = await prisma.products.findUnique({
    where: { id },
  });
  return product;
}

export async function updateProduct(id: number, product: UpdateProduct) {
  const updatedProduct = await prisma.products.update({
    where: { id },
    data: product,
  });
  return updatedProduct;
}

export async function deleteProduct(id: number) {
  await prisma.products.delete({
    where: { id },
  });
}

export const productRepository = {
  create,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};