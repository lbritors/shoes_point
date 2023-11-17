import { CreateProduct, UpdateProduct } from "../protocols/products.protocol";
import { productRepository } from "../repositories/products.repository";
import { notFoundError } from "../errors/not-found-error";
import { conflictError } from "../errors/conflict-error";
import { Product } from "../protocols/client.protocol";

export async function create(product: CreateProduct) {
  const createdProduct = await productRepository.create(product);
  return createdProduct;
}

export async function getProducts() {
  const products = await productRepository.getProducts();
  return products;
}


export async function getProductById(id: number) {
  const product = await productRepository.getProductById(id);
  if (!product) {
    throw notFoundError();
  }
  return product;
}

export async function updateProduct(id: number, product: UpdateProduct) {
  const { name, price, quantity, size, categoriesId } = product;
  const productEdited: { name?: string, price?: number, quantity?: number, size?: string, categoriesId?: number } = {};
  if (name) productEdited.name = name;
  if (price) productEdited.price = price;
  if (quantity) productEdited.quantity = quantity;
  if (size) productEdited.size = size;
  if (categoriesId) productEdited.categoriesId = categoriesId;

  const productExists = await productRepository.getProductById(id);
  if (!productExists) {
    throw notFoundError();
  }
  const updatedProduct = await productRepository.updateProduct(id, productEdited);
  return updatedProduct;
}

export async function deleteProduct(id: number) {
  const productExists = await productRepository.getProductById(id);
  if (!productExists) {
    throw notFoundError();
  }
  await productRepository.deleteProduct(id);
}

export const productService = {
  create,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};