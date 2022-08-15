import { Router } from "express";
import { validateRoleMaster } from "../../middlewares/validateRoleMaster.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { createBillController } from "./postController/createBill.controller.js";
export const bills = Router();

const middlewares = [validateToken, validateRoleMaster];

bills.route("/").post(middlewares, createBillController);
