import { Router } from "express";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller.js";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { updateCategoryController } from "./putController/updateCategory.controller.js";

export const categories = Router();

categories.route("/:id").put(updateCategoryController);
categories.route("/:id").delete(deleteCategoryController);
categories.route("/").post(createCategoryController);
categories.route("/").get(getAllCategoriesController);
