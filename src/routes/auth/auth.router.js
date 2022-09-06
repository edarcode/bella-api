import { Router } from "express";
import { validateToken } from "../../middlewares/validateToken.js";
import { validateTokenRegister } from "../../middlewares/validateTokenRegister.js";
import { verifyRegisterController } from "./getController/verifyRegister.controller.js";
import { loginController } from "./postController/login.controller.js";
import { registerController } from "./postController/register.controller.js";
import { verifyTokenController } from "./postController/verifyToken.controller.js";

export const auth = Router();

auth.route("/register").post(registerController);
auth
	.route("/register/verify")
	.get(validateTokenRegister, verifyRegisterController);
auth.route("/login").post(loginController);
auth.route("/token/verify").post(validateToken, verifyTokenController);
