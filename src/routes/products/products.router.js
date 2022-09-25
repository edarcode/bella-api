import { Router } from "express";
import { admin, master } from "../../constants/middlewares.js";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getAllProductsClientController } from "./getController/getAllProductsClient.controller.js";
import { getDetailProductController } from "./getController/getDetailProduct.controller.js";
import { getDetailProductClientController } from "./getController/getDetailProductClient.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
import { updateProductController } from "./putController/updateProduct.controller.js";
export const products = Router();

products.route("/").post(master, createProductController);
products.route("/client/:id").get(getDetailProductClientController);
products.route("/client").get(getAllProductsClientController);
products.route("/:id").get(master, getDetailProductController);
products.route("/:id").put(master, updateProductController);
products.route("/").get(admin, getAllProductsController);
