import { ERR, SUCCESS } from "../../../constants/msgsRes.js";
import { createProduct } from "../../../utils/createProduct.js";

export const createProductController = async (req, res, next) => {
	try {
		const product = await createProduct(req.body);
		if (!product) return res.status(400).json({ msg: ERR });
		res.status(201).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
