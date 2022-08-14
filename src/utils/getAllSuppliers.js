import { Op } from "sequelize";
import { suppliersPerPage } from "../constants/perPage.js";
import { Supplier } from "../dbRelations.js";

export const getAllSuppliers = async params => {
	const { page = 0, perPage = suppliersPerPage, order } = params;
	const { count, rows } = await Supplier.findAndCountAll({
		where: where(params),
		offset: perPage * page,
		limit: perPage,
		attributes: ["id", "name", "tell", "email", "active", "img"],
		order: (order && [JSON.parse(order)]) || [] // order debe ser una cadena de la forma ["colum","valor"]
	});
	if (!rows.length) return null;
	const dataSuppliers = {
		suppliersCount: count,
		pageCount: Math.ceil(count / perPage),
		suppliersPerPAge: perPage,
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
