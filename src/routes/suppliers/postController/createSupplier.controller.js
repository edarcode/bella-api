import { ALREADY_EXISTS, SUCCESS } from "../../../constants/msgsRes.js";
import { createSupplier } from "../../../utils/createSupplier.js";

export const createSupplierController = async (req, res, next) => {
	try {
		const supplier = await createSupplier(req.body);
		if (!supplier) return res.status(400).json({ msg: ALREADY_EXISTS });
		res.status(201).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
