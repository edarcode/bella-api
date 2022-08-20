import { Router } from "express";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getAllProductsClientController } from "./getController/getAllProductsClient.controller.js";
import { getDetailProductController } from "./getController/getDetailProduct.controller.js";
import { getDetailProductClientController } from "./getController/getDetailProductClient.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
import { updateProductController } from "./putController/updateProduct.controller.js";
export const products = Router();

products.route("/").post(createProductController);
products.route("/").get(getAllProductsController);
products.route("/client").get(getAllProductsClientController);
products.route("/:id").get(getDetailProductController);
products.route("/client/:id").get(getDetailProductClientController);
products.route("/:id").put(updateProductController);
