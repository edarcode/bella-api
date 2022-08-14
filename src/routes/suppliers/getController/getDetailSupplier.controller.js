import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getDetailSupplier } from "../../../utils/getDetailSupplier.js";

export const getDetailSupplierController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const supplier = await getDetailSupplier(id);
		if (!supplier) return res.status(404).json(NOT_FOUND);
		res.status(200).json(supplier);
	} catch (error) {
		next(error);
	}
};
