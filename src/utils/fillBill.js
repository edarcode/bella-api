import { bills } from "../data/bills.js";
import { User } from "../dbRelations.js";
import { EMAIL_MASTER } from "../env/master.js";
import { createBill } from "./createBill.js";

export const fillBill = async () => {
	const user = await User.findOne({ where: { email: EMAIL_MASTER } });
	for (let i = 0; i < bills.length; i++) {
		const element = bills[i];
		await createBill(user, element);
	}
};
