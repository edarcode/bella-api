import { NOT_FOUND, SUCCESS } from "../../../constants/msgsRes.js";
import { updateProduct } from "../../../utils/updateProduct.js";

export const updateProductController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await updateProduct(id, req.body);
		if (!product) return res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
