import { products } from "../data/products.js";
import { createProduct } from "./createProduct.js";

export const fillProduct = async () => {
	for (let i = 0; i < products.length; i++) {
		const element = products[i];
		await createProduct(element);
	}
};
