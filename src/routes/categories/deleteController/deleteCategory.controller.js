import { DESTROY, NOT_FOUND } from "../../../constants/msgsRes.js";
import { Category } from "../../../dbRelations.js";
import { destroyTuple } from "../../../utils/destroyTuple.js";

export const deleteCategoryController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const isDestroy = await destroyTuple(Category, id);
		if (!isDestroy) return res.status(400).json({ msg: NOT_FOUND });
		res.status(200).json({ msg: DESTROY });
	} catch (error) {
		next(error);
	}
};
