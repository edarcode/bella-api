import { Router } from "express";
import { createSupplierController } from "./postController/createSupplier.controller.js";
export const suppliers = Router();

suppliers.route("/").post(createSupplierController);
