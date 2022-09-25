import { Router } from "express";
import { admin } from "../../constants/middlewares.js";
import { getAllUsersController } from "./getController/getAllUsers.controller.js";

export const users = Router();

users.route("/").get(admin, getAllUsersController);
