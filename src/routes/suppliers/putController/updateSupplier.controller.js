import { NOT_FOUND, SUCCESS } from "../../../constants/msgsRes.js";
import { updateSupplier } from "../../../utils/updateSupplier.js";

export const updateSupplierController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const supplier = await updateSupplier(id, req.body);
		if (!supplier) return res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
