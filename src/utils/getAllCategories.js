import { Category } from "../dbRelations.js";

export const getAllCategories = async () => {
	const allCategories = await Category.findAll();
	if (!allCategories.length) return null;

	return allCategories;
};
