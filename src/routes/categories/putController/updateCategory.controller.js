import { NOT_FOUND, SUCCESS } from "../../../constants/msgsRes.js";
import { updateCategory } from "../../../utils/updateCategory.js";

export const updateCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const category = await updateCategory(id, req.body);
		if (!category) return res.status(400).json({ msg: NOT_FOUND });
		res.status(200).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
