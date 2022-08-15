import { Image, Product } from "../dbRelations.js";
import { createProductImages } from "./createProductImages.js";

export const updateProduct = async (
	id,
	{
		active,
		stock,
		name,
		buyPrice,
		salePrice,
		discount,
		description,
		images,
		suppliers,
		categories
	}
) => {
	const product = await Product.findByPk(id);
	if (!product) return null;
	await product.update({
		active,
		stock,
		name,
		buyPrice,
		salePrice,
		discount,
		description
	});

	if (images && images.length) {
		await Image.destroy({
			truncate: true,
			cascade: true,
			include: [
				{
					model: Product,
					as: "products",
					where: { id: product.id }
				}
			]
		});
		const imageIds = await createProductImages(images);
		await product.setImages(imageIds);
	}
	if (suppliers && suppliers.length) {
		await product.setSuppliers(suppliers);
	}
	if (categories && categories.length) {
		await product.setCategories(categories);
	}
	await product.save();

	return product;
};
