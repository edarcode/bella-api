import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getDetailProduct } from "../../../utils/getDetailProduct.js";

export const getDetailProductController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await getDetailProduct(id);
		if (!product) res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};
