import { Router } from "express";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { getDetailProductController } from "./getController/getDetailProduct.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
export const products = Router();

products.route("/").post(createProductController);
products.route("/").get(getAllProductsController);
products.route("/:id").get(getDetailProductController);
