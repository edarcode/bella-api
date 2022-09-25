import { Router } from "express";
import { admin } from "../../constants/middlewares.js";
import { createBillController } from "./postController/createBill.controller.js";
export const bills = Router();

bills.route("/").post(admin, createBillController);
