import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { users } from "./users/users.router.js";

export const router = Router();

router.use("/auth", auth);
router.use("/users", users);
