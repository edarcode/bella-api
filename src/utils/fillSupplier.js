import { suppliers } from "../data/suppliers.js";
import { createSupplier } from "./createSupplier.js";

export const fillSupplier = async () => {
	for (let i = 0; i < suppliers.length; i++) {
		const element = suppliers[i];
		await createSupplier(element);
	}
};
