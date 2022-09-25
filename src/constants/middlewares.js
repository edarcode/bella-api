import { validateRoleAdmin } from "../middlewares/validateRoleAdmin.js";
import { validateRoleMaster } from "../middlewares/validateRoleMaster.js";
import { validateToken } from "../middlewares/validateToken.js";

export const admin = [validateToken, validateRoleAdmin];
export const master = [validateToken, validateRoleMaster];
