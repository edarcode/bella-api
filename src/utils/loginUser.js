import { User } from "../dbRelations.js";
import { comparePassword } from "./comparePassword.js";

export const loginUser = async ({ email, password }) => {
	if (!email || !password) return null;
	const user = await User.findOne({
		where: { email }
	});
	if (!user) return null;
	const isRightPassword = await comparePassword(password, user.password);
	if (!isRightPassword) return null;

	return user;
};
