import { Router } from "express";
import { productSchema, updateProductSchema } from "@/schemas/products.schema";
import { schemaValidator } from "@/middlewares/schema.middleware";
import { productController } from "@/controllers/products.controller";

const productRouter = Router();

productRouter.get("/products", productController.getProducts);
productRouter.post("/products", schemaValidator(productSchema), productController.createProduct);
productRouter.get("/products/:id", productController.getProductById);
productRouter.put("/products/:id", schemaValidator(updateProductSchema), productController.updateProduct);
productRouter.delete("/products/:id", productController.deleteProduct);

export default productRouter;