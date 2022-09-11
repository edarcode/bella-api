import { Router } from "express";
import { validateRoleAdmin } from "../../middlewares/validateRoleAdmin.js";
import { validateToken } from "../../middlewares/validateToken.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";

export const users = Router();

const middlewaresAdmin = [validateToken, validateRoleAdmin];

users.route("/").get(middlewaresAdmin, getAllUsersController);
