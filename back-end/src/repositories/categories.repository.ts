import { prisma } from "../database";
import { CreateCategory, UpdateCategory } from "../protocols/categories.protocol";

export async function create(category: CreateCategory) {
  const createdCategory = await prisma.categories.create({
    data: category,
  });
  return createdCategory;
}

export async function getCategories() {
  const categories = await prisma.categories.findMany();
  return categories;
}

export async function getCategoryByName(name: string) {
  const categories = await prisma.categories.findFirst({
    where: {
      name: name,
    },
  });
  return categories;
}

export async function getCategoryById(id: number) {
  const category = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });
  return category;
}

export async function updateCategory(id: number, category: string) {
  const updatedCategory = await prisma.categories.update({
    where: {
      id: id,
    },
    data: category,
  });
  return updatedCategory;
}

export async function deleteCategory(id: number) {
  await prisma.categories.delete({
    where: {
      id: id,
    },
  });
}

export const categoryRepository = {
  create,
  getCategories,
  getCategoryByName,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

