import { Router } from "express";
import { getAllProductsController } from "./getController/getAllProducts.controller.js";
import { createProductController } from "./postController/createProduct.controller.js";
export const products = Router();

products.route("/").post(createProductController);
products.route("/").get(getAllProductsController);
