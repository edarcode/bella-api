import { Router } from "express";
import { validateRoleMaster } from "../../middlewares/validateRoleMaster.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { deleteCategoryController } from "./deleteController/deleteCategory.controller.js";
import { getAllCategoriesController } from "./getController/getAllCategories.controller.js";
import { createCategoryController } from "./postController/createCategory.controller.js";
import { updateCategoryController } from "./putController/updateCategory.controller.js";

export const categories = Router();
const middlewaresMaster = [validateToken, validateRoleMaster];

categories.route("/:id").put(middlewaresMaster, updateCategoryController);
categories.route("/:id").delete(middlewaresMaster, deleteCategoryController);
categories.route("/").post(middlewaresMaster, createCategoryController);
categories.route("/").get(getAllCategoriesController);
