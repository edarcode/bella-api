import { Supplier } from "../dbRelations.js";

export const getDetailSupplier = async id => {
	const supplier = await Supplier.findOne({
		where: { id }
	});

	return supplier;
};
