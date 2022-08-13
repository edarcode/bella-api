import { DataTypes } from "sequelize";

export const defineDetail = sequelize => {
	sequelize.define("Detail", {
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		buyPrice: {
			type: DataTypes.REAL,
			allowNull: false
		}
	});
};
