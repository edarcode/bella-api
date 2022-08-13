import { Router } from "express";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { updateCategoryController } from "./putController/updateCategory.controller.js";

export const categories = Router();

categories.route("/:id").put(updateCategoryController);
categories.route("/").post(createCategoryController);
categories.route("/").get(getAllCategoriesController);
