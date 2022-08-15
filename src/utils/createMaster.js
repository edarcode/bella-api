import { MASTER } from "../constants/roles.js";
import { User } from "../dbRelations.js";
import { EMAIL_MASTER, PASSWORD_MASTER } from "../env/master.js";
import { encryptPassword } from "./encryptPassword.js";

export const createMaster = async () => {
	await User.create({
		verify: true,
		role: MASTER,
		email: EMAIL_MASTER,
		password: await encryptPassword(PASSWORD_MASTER)
	});
};
