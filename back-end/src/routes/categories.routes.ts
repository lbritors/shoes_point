import { Router } from "express";
import { categorySchema, updateCategorySchema } from "../schemas/categories.schema";
import { schemaValidator } from "../middlewares/schema.middleware";
import { categoryController } from "../controllers/categories.controllers";

const categoryRouter = Router();

categoryRouter.get('/categories', categoryController.getCategories);
categoryRouter.post('/categories', schemaValidator(categorySchema), categoryController.createCategory);
categoryRouter.get('/categories/:id', categoryController.getCategoryById);
categoryRouter.put('/categories/:id', schemaValidator(updateCategorySchema), categoryController.updateCategory);
categoryRouter.delete('/categories/:id', categoryController.deleteCategory);

export default categoryRouter;
