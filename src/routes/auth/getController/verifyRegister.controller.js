import { SUCCESSFUL_REGISTRATION } from "../../../constants/msgsRes.js";

export const verifyRegisterController = async (req, res, next) => {
	try {
		const { user } = req;
		await user.update({ verify: true });
		await user.save();
		res.json({ msg: SUCCESSFUL_REGISTRATION });
	} catch (error) {
		next(error);
	}
};
