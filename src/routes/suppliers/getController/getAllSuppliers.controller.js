import { NOT_FOUND } from "../../../constants/msgsRes.js";
import { getAllSuppliers } from "../../../utils/getAllSuppliers.js";

export const getAllSuppliersController = async (req, res, next) => {
	try {
		const dataSuppliers = await getAllSuppliers(req.query);
		if (!dataSuppliers) return res.status(404).json({ msg: NOT_FOUND });
		res.status(200).json(dataSuppliers);
	} catch (error) {
		next(error);
	}
};
