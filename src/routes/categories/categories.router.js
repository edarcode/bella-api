import { Router } from "express";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";

export const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(getAllCategoriesController);
