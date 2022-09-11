import { Op } from "sequelize";
import { SUPPLIERS_PER_PAGE } from "../constants/perPage.js";
import { Product, Supplier } from "../dbRelations.js";

export const getAllSuppliers = async params => {
	const { page = 0, suppliersPerPage = SUPPLIERS_PER_PAGE, order } = params;
	const perPage = Number(suppliersPerPage);
	const { count, rows } = await Supplier.findAndCountAll({
		where: where(params),
		offset: perPage * page,
		limit: perPage,
		attributes: ["id", "name", "tell", "email", "active", "img"],
		order: (order && [JSON.parse(order)]) || [], // order debe ser una cadena de la forma ["colum","valor"]
		include: include(params),
		distinct: true
	});
	if (!rows.length) return null;
	const dataSuppliers = {
		suppliersCount: count,
		pageCount: Math.ceil(count / perPage),
		suppliersPerPage: perPage,
		page: parseInt(page),
		suppliers: rows
	};

	return dataSuppliers;
};

const where = ({ name, tell, email, active }) => {
	const result = {};
	if (name) result.name = { [Op.iLike]: `%${name}%` };
	if (tell) result.tell = tell;
	if (email) result.email = email;
	if (active) result.active = active;

	return result;
};
const include = ({ productId }) => {
	if (!productId) return [];
	return [
		{
			model: Product,
			as: "products",
			where: { id: productId },
			attributes: [],
			through: { attributes: [] }
		}
	];
};
