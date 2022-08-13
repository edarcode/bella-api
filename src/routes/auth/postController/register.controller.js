import { VIRIFY_EMAIL } from "../../../constants/msgsRes.js";
import { createToken } from "../../../utils/createToken.js";
import { registerUser } from "../../../utils/registerUser.js";
import { sendVerificationEmail } from "../../../utils/sendVerificationEmail.js";

export const registerController = async (req, res, next) => {
	try {
		const [user] = await registerUser(req.body);
		if (user.verify) return res.status(400).json({ msg: "err" });
		const token = createToken({ userId: user.id }, "1h");
		await sendVerificationEmail(user.email, token);
		res.status(201).json({ msg: VIRIFY_EMAIL });
	} catch (error) {
		next(error);
	}
};
