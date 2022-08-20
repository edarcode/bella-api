import { Product } from "../dbRelations.js";
import { createProductImages } from "./createProductImages.js";
import { destroyTuple } from "./destroyTuple.js";

export const createProduct = async ({
	stock,
	name,
	subName,
	buyPrice,
	salePrice,
	description,
	categories,
	images,
	suppliers
}) => {
	const [product, created] = await Product.findOrCreate({
		where: { name },
		defaults: { subName, stock, buyPrice, salePrice, description }
	});
	if (!created) return null;
	try {
		await product.setCategories(categories);
		await product.setSuppliers(suppliers);
		const imageIds = await createProductImages(images);
		await product.setImages(imageIds);
	} catch (error) {
		await destroyTuple(Product, product.id);
		return null;
	}

	return product;
};
