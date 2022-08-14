import { Router } from "express";
import { createProductController } from "./postController/createProduct.controller.js";
export const products = Router();

products.route("/").post(createProductController);
