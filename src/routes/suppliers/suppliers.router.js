import { Router } from "express";
import { master } from "../../constants/middlewares.js";
import { getAllSuppliersController } from "./getController/getAllSuppliers.controller.js";
import { getDetailSupplierController } from "./getController/getDetailSupplier.controller.js";
import { createSupplierController } from "./postController/createSupplier.controller.js";
import { updateSupplierController } from "./putController/updateSupplier.controller.js";
export const suppliers = Router();

suppliers.route("/").post(master, createSupplierController);
suppliers.route("/").get(master, getAllSuppliersController);
suppliers.route("/:id").get(master, getDetailSupplierController);
suppliers.route("/:id").put(master, updateSupplierController);
