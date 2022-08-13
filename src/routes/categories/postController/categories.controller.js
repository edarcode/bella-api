import { ALREADY_EXISTS, SUCCESS } from "../../../constants/msgsRes.js";
import { createCategory } from "../../../utils/createCategory.js";

export const createCategoriesController = async (req, res, next) => {
	try {
		const category = await createCategory(req.body);
		if (!category) return res.status(200).json({ msg: ALREADY_EXISTS });
		res.json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
