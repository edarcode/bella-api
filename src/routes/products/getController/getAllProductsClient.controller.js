import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getAllProductsClient } from "../../../utils/getAllProductsClient.js";

export const getAllProductsClientController = async (req, res, next) => {
	try {
		const dataProducts = await getAllProductsClient(req.query);
		if (!dataProducts) return res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json(dataProducts);
	} catch (error) {
		next(error);
	}
};
