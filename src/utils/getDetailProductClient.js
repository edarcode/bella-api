import { Category, Image, Product } from "../dbRelations.js";

export const getDetailProductClient = async id => {
	const product = await Product.findOne({
		where: { id },
		attributes: [
			"id",
			"name",
			"subName",
			"description",
			"salePrice",
			"stock",
			"discount"
		],
		include: [
			{
				model: Image,
				as: "images",
				through: { attributes: [] }
			},
			{
				model: Category,
				as: "categories",
				attributes: ["id", "name"],
				through: { attributes: [] }
			}
		]
	});
	if (!product) return null;

	return product;
};
