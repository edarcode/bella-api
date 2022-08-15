import { DataTypes } from "sequelize";

export const defineDetail = sequelize => {
	sequelize.define("Detail", {
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		salePrice: {
			type: DataTypes.REAL,
			allowNull: false
		}
	});
};
