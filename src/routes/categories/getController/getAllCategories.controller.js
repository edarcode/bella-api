import { getAllCategories } from "../../../utils/getAllCategories.js";

export const getAllCategoriesController = async (req, res, next) => {
	try {
		const allCategories = await getAllCategories();
		res.status(200).json(!allCategories ? [] : allCategories);
	} catch (error) {
		next(error);
	}
};
