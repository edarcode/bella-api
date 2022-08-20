import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getDetailProductClient } from "../../../utils/getDetailProductClient.js";

export const getDetailProductClientController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await getDetailProductClient(id);
		if (!product) res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};
