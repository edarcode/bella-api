import { Category } from "../dbRelations.js";

export const updateCategory = async (id, { name, img }) => {
	const category = await Category.findByPk(id);
	if (!category) return null;
	await category.update({ name, img });
	await category.save();

	return category;
};
