import jwt from "jsonwebtoken";
import { NO_TOKEN, UNAUTHORIZED } from "../constants/msgsRes.js";
import { User } from "../dbRelations.js";
import { SECRET } from "../env/secret.js";

export const validateTokenRegister = async (req, res, next) => {
	try {
		const { token } = req.query;
		if (!token) return res.status(400).json({ msg: NO_TOKEN });
		const { userId } = jwt.verify(token, SECRET);
		const user = await User.findByPk(userId);
		if (!user) return res.status(401).json({ msg: UNAUTHORIZED });
		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ msg: UNAUTHORIZED });
	}
};
