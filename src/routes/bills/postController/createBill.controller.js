import { ERR, SUCCESS } from "../../../constants/msgsRes.js";
import { createBill } from "../../../utils/createBill.js";

export const createBillController = async (req, res, next) => {
	try {
		const bill = await createBill(req.user, req.body);
		if (!bill) return res.status(400).json({ msg: ERR });
		res.status(200).json({ msg: SUCCESS });
	} catch (error) {
		next(error);
	}
};
