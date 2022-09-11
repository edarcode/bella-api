import { Router } from "express";
import { validateRoleMaster } from "../../middlewares/validateRoleMaster.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { getAllSuppliersController } from "./getController/getAllSuppliers.controller.js";
import { getDetailSupplierController } from "./getController/getDetailSupplier.controller.js";
import { createSupplierController } from "./postController/createSupplier.controller.js";
import { updateSupplierController } from "./putController/updateSupplier.controller.js";
export const suppliers = Router();

const middlewaresMaster = [validateToken, validateRoleMaster];

suppliers.route("/").post(middlewaresMaster, createSupplierController);
suppliers.route("/").get(middlewaresMaster, getAllSuppliersController);
suppliers.route("/:id").get(middlewaresMaster, getDetailSupplierController);
suppliers.route("/:id").put(middlewaresMaster, updateSupplierController);
