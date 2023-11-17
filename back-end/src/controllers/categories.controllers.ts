import { Request, Response } from "express";
import { CreateCategory, UpdateCategory } from "../protocols/categories.protocol";
import { categoryService } from "../services/categories.services";
import httpStatus from "http-status";

export async function createCategory(req: Request, res: Response) {
  const category: CreateCategory = req.body;
  try {
    const createdCategory = await categoryService.create(category);
    res.status(httpStatus.CREATED).send(createdCategory);
    
  } catch (err) {
    if (err.name === "ConfictError") {
      res.status(httpStatus.CONFLICT).send(err.message);
    }
  }
}

export async function getCategoryById(req: Request, res: Response) {
  const id = +req.params.id;
  const category = await categoryService.getCategoryById(id);
  res.status(httpStatus.OK).send(category);
}

export async function getCategories(req: Request, res: Response) {
  const categories = await categoryService.getCategories();
  res.status(httpStatus.OK).send(categories);
}

export async function updateCategory(req: Request, res: Response) {
  const id = +req.params.id;
  const category: UpdateCategory = req.body;
  try {
    const updatedCategory = await categoryService.updateCategory(id, category);
    res.status(httpStatus.OK).send(updatedCategory);
    
  } catch (err) {
    if (err.name === "NotFoundError") {
      res.status(httpStatus.NOT_FOUND).send(err.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function deleteCategory(req: Request, res: Response) {
  const id = +req.params.id;
  try {
    await categoryService.deleteCategory(id);
    res.status(httpStatus.NO_CONTENT).send();
    
  } catch (err) {
    if (err.name === "NotFoundError") {
      res.status(httpStatus.NOT_FOUND).send(err.message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
  
}


export const categoryController = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
}