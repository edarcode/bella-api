import { Router } from "express";
import { createBillController } from "./postController/createBill.controller.js";
export const bills = Router();

bills.route("/").post(createBillController);
