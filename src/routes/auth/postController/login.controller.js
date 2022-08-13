import { UNAUTHORIZED } from "../../../constants/msgsRes.js";
import { createToken } from "../../../utils/createToken.js";
import { loginUser } from "../../../utils/loginUser.js";

export const loginController = async (req, res, next) => {
	try {
		const user = await loginUser(req.body);
		if (!user || !user.verify)
			return res.status(401).json({ msg: UNAUTHORIZED });
		const token = createToken({ userId: user.id }, "24h");
		res.status(200).json({ token });
	} catch (error) {
		next(error);
	}
};
