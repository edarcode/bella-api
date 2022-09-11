import { Router } from "express";
import { validateRoleAdmin } from "../../middlewares/validateRoleAdmin.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { createBillController } from "./postController/createBill.controller.js";
export const bills = Router();

const middlewaresAdmin = [validateToken, validateRoleAdmin];

bills.route("/").post(middlewaresAdmin, createBillController);
