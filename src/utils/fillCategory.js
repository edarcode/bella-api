import { categories } from "../data/categories.js";
import { createCategory } from "./createCategory.js";

export const fillCategory = async () => {
	for (let i = 0; i < categories.length; i++) {
		const element = categories[i];
		await createCategory(element);
	}
};
