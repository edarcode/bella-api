import { Product, Supplier } from "../dbRelations.js";

export const getDetailSupplier = async id => {
	const supplier = await Supplier.findOne({
		where: { id },
		include: [
			{
				model: Product,
				as: "products",
				attributes: ["id", "name"],
				through: { attributes: [] }
			}
		]
	});

	return supplier;
};
