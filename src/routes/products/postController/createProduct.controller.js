import { ERR, SUCCESS_CREATED_PRODUCT } from "../../../constants/msgsRes.js";
import { createProduct } from "../../../utils/createProduct.js";

export const createProductController = async (req, res, next) => {
	try {
		const product = await createProduct(req.body);
		if (!product) return res.status(400).json({ msg: ERR });
		res.status(201).json({ msg: SUCCESS_CREATED_PRODUCT });
	} catch (error) {
		next(error);
	}
};
