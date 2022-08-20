import { Op } from "sequelize";
import { PRODUCTS_PER_PAGE } from "../constants/perPage.js";
import { Category, Product } from "../dbRelations.js";

export const getAllProductsClient = async params => {
	const { page = 0, productsPerPage = PRODUCTS_PER_PAGE, order } = params;
	const perPage = Number(productsPerPage);
	const { count, rows } = await Product.findAndCountAll({
		where: where(params),
		offset: perPage * page,
		limit: perPage,
		attributes: ["id", "name", "subName", "salePrice", "discount"],
		order: (order && [JSON.parse(order)]) || [], // order debe ser una cadena de la forma ["colum","valor"]
		include: include(params),
		distinct: true
	});
	if (!rows.length) return null;
	const dataProducts = {
		productsCount: count,
		pageCount: Math.ceil(count / perPage),
		productsPerPage: perPage,
		page: parseInt(page),
		products: rows
	};

	return dataProducts;
};

const where = ({ name, minSalePrice, maxSalePrice }) => {
	const result = { active: true };
	if (name) result.name = { [Op.iLike]: `%${name}%` };
	if (minSalePrice) result.salePrice = { [Op.gte]: [minSalePrice] };
	if (maxSalePrice) result.salePrice = { [Op.lte]: [maxSalePrice] };
	if (minSalePrice && maxSalePrice)
		result.salePrice = { [Op.between]: [minSalePrice, maxSalePrice] };

	return result;
};
const include = ({ categoryId }) => {
	if (!categoryId) return [];
	return [
		{
			model: Category,
			as: "categories",
			where: { id: categoryId },
			attributes: [],
			through: { attributes: [] }
		}
	];
};
