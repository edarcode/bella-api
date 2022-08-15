import { Bill, Product } from "../dbRelations.js";
import { destroyTuple } from "./destroyTuple.js";

export const createBill = async (user, { address, tell, details }) => {
	if (!user || !address || !tell || !details || !details.length) return null;
	const bill = await Bill.create({
		address,
		tell
	});
	try {
		await bill.setUser(user.id);
		for (let i = 0; i < details.length; i++) {
			const item = details[i];
			const { productId, amount } = item;
			const product = await Product.findByPk(productId);
			const salePrice = product.salePrice;
			await bill.addProduct(product.id, { through: { amount, salePrice } });
		}
		return bill;
	} catch (error) {
		await destroyTuple(Bill, bill.id);
		return null;
	}
};
