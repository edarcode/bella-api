import { Category } from "../dbRelations.js";

export const createCategory = async ({ name, img }) => {
	const [category, created] = await Category.findOrCreate({
		where: { name },
		defaults: { img }
	});
	if (!created) return null;

	return category;
};
