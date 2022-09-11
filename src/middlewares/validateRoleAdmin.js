import { REQUIRE_ADMIN } from "../constants/msgsRes.js";
import { ADMIN, MASTER } from "../constants/roles.js";

export const validateRoleAdmin = (req, res, next) => {
	const { user } = req;
	if (user.role !== ADMIN && user.role !== MASTER)
		return res.status(401).json({ msg: REQUIRE_ADMIN });
	next();
};
