import { Router } from "express";
import { master } from "../../constants/middlewares.js";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller.js";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { updateCategoryController } from "./putController/updateCategory.controller.js";

export const categories = Router();

categories.route("/:id").put(master, updateCategoryController);
categories.route("/:id").delete(master, deleteCategoryController);
categories.route("/").post(master, createCategoryController);
categories.route("/").get(getAllCategoriesController);
