import jwt from "jsonwebtoken";
import { NO_TOKEN, UNAUTHORIZED } from "../constants/msgsRes.js";
import { User } from "../dbRelations.js";

export const validateToken = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) return res.status(400).json({ msg: NO_TOKEN });
		const { userId } = jwt.verify(
			token,
			process.env.SECRET
		); /* lanza err si no es valido */
		const user = await User.findByPk(userId);
		if (!user) return res.status(401).json({ msg: UNAUTHORIZED });
		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ msg: UNAUTHORIZED });
	}
};
