import { Router } from "express";
import { auth } from "./auth/auth.router.js";
import { categories } from "./categories/categories.router.js";
import { users } from "./users/users.router.js";

export const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/categories", categories);
