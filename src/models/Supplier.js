import { DataTypes } from "sequelize";

export const defineSupplier = sequelize => {
	sequelize.define("Supplier", {
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tell: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validator: {
				isEmail: true
			},
			unique: true
		}
	});
};
