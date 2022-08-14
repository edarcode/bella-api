import { ALREADY_EXISTS, SUCCESS } from "../../../constants/msgsRes.js";
import { createCategory } from "../../../utils/createCategory.js";

export const createCategoryController = async (req, res, next) => {
	try {
		const category = await createCategory(req.body);
		if (!category) return res.status(400).json({ msg: ALREADY_EXISTS });
		res.status(201).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
