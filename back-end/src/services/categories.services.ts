import { CreateCategory, UpdateCategory } from "../protocols/categories.protocol";
import { conflictError } from "../errors/conflict-error";
import { categoryRepository } from "../repositories/categories.repository";
import { notFoundError } from "../errors/not-found-error";

export async function create(category: CreateCategory) {
  const categoryExists = await categoryRepository.getCategoryByName(category.name);
  if (categoryExists && category.name === categoryExists.name) {
    throw conflictError();
  }
  const createdCategory = await categoryRepository.create(category);
  return createdCategory;
}

export async function getCategories() {
  const categories = await categoryRepository.getCategories();
  return categories;
}

export async function getCategoryByName( name: string) {
  const categories = await categoryRepository.getCategoryByName(name);
  return categories;
}

export async function getCategoryById(id: number) {
  const category = await categoryRepository.getCategoryById(id);
  if (!category) {
    throw notFoundError();
  }
  return category;
}

export async function updateCategory(id: number, category: UpdateCategory) {
  const { name } = category;
  const categoryExists = await categoryRepository.getCategoryById(id);
  if (!categoryExists) {
    throw notFoundError();
  }
  const updatedCategory = await categoryRepository.updateCategory(id, name);
  return updatedCategory;
}

export async function deleteCategory(id: number) {
  const categoryExists = await categoryRepository.getCategoryById(id);
  if (!categoryExists) {
    throw notFoundError();
  }
  await categoryRepository.deleteCategory(id);
}

export const categoryService = {
  create,
  getCategories,
  getCategoryByName,
  getCategoryById,
  updateCategory,
  deleteCategory,
};