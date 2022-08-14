import { Supplier } from "../dbRelations.js";

export const createSupplier = async ({ name, tell, email, img }) => {
	const [supplier, created] = await Supplier.findOrCreate({
		where: { name },
		defaults: {
			tell,
			email,
			img
		}
	});
	if (!created) return null;

	return supplier;
};
