import { Supplier } from "../dbRelations.js";

export const updateSupplier = async (
	id,
	{ name, tell, email, active, img, products }
) => {
	const supplier = await Supplier.findByPk(id);
	if (!supplier) return null;
	await supplier.update({ name, tell, email, active, img });
	if (products && products.length) {
		await supplier.setProducts(products);
	}
	await supplier.save();

	return supplier;
};
