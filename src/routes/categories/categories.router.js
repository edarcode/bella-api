import { Router } from "express";
import { createCategoriesController } from "./postController/categories.controller.js";

export const categories = Router();

categories.route("/").post(createCategoriesController);
