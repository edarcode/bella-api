import { REQUIRE_MASTER } from "../constants/msgsRes.js";
import { MASTER } from "../constants/roles.js";

export const validateRoleMaster = (req, res, next) => {
	const { user } = req;
	if (user.role !== MASTER)
		return res.status(401).json({ msg: REQUIRE_MASTER });
	next();
};
