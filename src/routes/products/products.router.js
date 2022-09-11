import { Router } from "express";
import { validateRoleAdmin } from "../../middlewares/validateRoleAdmin.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getAllProductsClientController } from "./getController/getAllProductsClient.controller.js";
import { getDetailProductController } from "./getController/getDetailProduct.controller.js";
import { getDetailProductClientController } from "./getController/getDetailProductClient.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
import { updateProductController } from "./putController/updateProduct.controller.js";
export const products = Router();

const middlewares = [validateToken, validateRoleAdmin];

products.route("/").post(middlewares, createProductController);
products.route("/client/:id").get(getDetailProductClientController);
products.route("/client").get(getAllProductsClientController);
products.route("/:id").get(middlewares, getDetailProductController);
products.route("/:id").put(middlewares, updateProductController);
products.route("/").get(middlewares, getAllProductsController);
