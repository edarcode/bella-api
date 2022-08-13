import { Router } from "express";
import { loginController } from "./postController/login.controller.js";
import { registerController } from "./postController/register.controller.js";

export const auth = Router();

auth.route("/register").post(registerController);
auth.route("/login").post(loginController);
