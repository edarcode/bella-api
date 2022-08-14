import { Router } from "express";
import { getAllSuppliersController } from "./getController/getAllSuppliers.controller.js";
import { getDetailSupplierController } from "./getController/getDetailSupplier.controller.js";
import { createSupplierController } from "./postController/createSupplier.controller.js";
export const suppliers = Router();

suppliers.route("/").post(createSupplierController);
suppliers.route("/").get(getAllSuppliersController);
suppliers.route("/:id").get(getDetailSupplierController);
