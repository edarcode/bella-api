import {
	BAD_CREDENTIALS,
	UNREGISTERED_USER,
	USER_NOT_VERIFIED
} from "../../../constants/msgsRes.js";
import { createToken } from "../../../utils/createToken.js";
import { loginUser } from "../../../utils/loginUser.js";

export const loginController = async (req, res, next) => {
	try {
		const user = await loginUser(req.body);
		if (user === BAD_CREDENTIALS)
			return res.status(404).json({ msg: BAD_CREDENTIALS });
		if (!user) return res.status(404).json({ msg: UNREGISTERED_USER });
		if (!user.verify) return res.status(401).json({ msg: USER_NOT_VERIFIED });
		const token = createToken({ userId: user.id }, "24h");
		res.status(200).json({ token, email: user.email, role: user.role });
	} catch (error) {
		next(error);
	}
};
