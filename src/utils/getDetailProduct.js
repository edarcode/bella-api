import { Category, Image, Product, Supplier } from "../dbRelations.js";

export const getDetailProduct = async id => {
	const product = await Product.findOne({
		where: { id },
		include: [
			{
				model: Image,
				as: "images",
				attributes: ["id", "img"],
				through: { attributes: [] }
			},
			{
				model: Category,
				as: "categories",
				attributes: ["id", "name"],
				through: { attributes: [] }
			},
			{
				model: Supplier,
				as: "suppliers",
				attributes: ["id", "name", "tell", "email", "active", "img"],
				through: { attributes: [] }
			}
		]
	});
	if (!product) return null;

	return product;
};
