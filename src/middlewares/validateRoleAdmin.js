import { REQUIRE_ADMIN } from "../constants/msgsRes.js";
import { ADMIN } from "../constants/roles.js";

export const validateRoleAdmin = (req, res, next) => {
	const { user } = req;
	if (user.role !== ADMIN) return res.status(401).json({ msg: REQUIRE_ADMIN });
	next();
};
