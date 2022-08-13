import { User } from "../dbRelations.js";
import { encryptPassword } from "./encryptPassword.js";

export const registerUser = async ({ email, password }) => {
	const [user, created] = await User.findOrCreate({
		where: { email },
		defaults: { password: await encryptPassword(password) }
	});

	return [user, created];
};
