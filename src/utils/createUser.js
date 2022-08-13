import { User } from "../dbRelations.js";
import { encryptPassword } from "./encryptPassword.js";

export const createUser = async ({ email, password }) => {
	const [user, created] = await User.findOrCreate({
		where: { email },
		defaults: { password: await encryptPassword(password) }
	});

	if (!created) return null;
	return user;
};
