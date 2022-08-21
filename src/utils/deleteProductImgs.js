import { Image, Product } from "../dbRelations.js";

export const deleteProductImgs = async productId => {
	const imgsToDelete = await Image.findAll({
		include: [
			{
				model: Product,
				as: "products",
				where: { id: productId }
			}
		]
	});
	for (let i = 0; i < imgsToDelete.length; i++) {
		const { id } = imgsToDelete[i];
		Image.destroy({ where: { id } });
	}
};
