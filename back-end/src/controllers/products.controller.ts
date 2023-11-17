import { Request, Response } from "express";
import { CreateProduct, UpdateProduct } from "@/protocols/products.protocol";
import { productService } from "@/services/products.services";
import httpStatus from "http-status";

export async function createProduct(req: Request, res: Response) {
  const product = req.body as CreateProduct;
  const createdProduct = await productService.create(product);
  return res.status(httpStatus.CREATED).send(createdProduct);
}

export async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();
  return res.status(httpStatus.OK).send(products);
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await productService.getProductById(+id);
  return res.status(httpStatus.OK).send(product);
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const product = req.body as UpdateProduct;
  const updatedProduct = await productService.updateProduct(+id, product);
  return res.status(httpStatus.OK).send(updatedProduct);
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  await productService.deleteProduct(+id);
  return res.status(httpStatus.NO_CONTENT).send();
}

export const productController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};