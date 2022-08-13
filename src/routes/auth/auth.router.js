import { Router } from "express";
import { verifyRegisterController } from "./getController/verifyRegister.controller.js";
import { loginController } from "./postController/login.controller.js";
import { registerController } from "./postController/register.controller.js";

export const auth = Router();

auth.route("/register").post(registerController);
auth.route("/register/verify").get(verifyRegisterController);
auth.route("/login").post(loginController);
