import { User } from "../dbRelations.js";
import { encryptPassword } from "./encryptPassword.js";

export const registerUser = async ({ email, password }) => {
	if (!email && !password) return null;
	const [user] = await User.findOrCreate({
		where: { email },
		defaults: { password: await encryptPassword(password) }
	});

	return user;
};
