import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getAllProducts } from "../../../utils/getAllProducts.js";

export const getAllProductsController = async (req, res, next) => {
	try {
		const dataProducts = await getAllProducts(req.query);
		if (!dataProducts) return res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json(dataProducts);
	} catch (error) {
		next(error);
	}
};
