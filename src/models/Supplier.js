import { DataTypes } from "sequelize";

export const defineSupplier = sequelize => {
	sequelize.define("Supplier", {
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tell: {
			type: DataTypes.BIGINT,
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validator: {
				isEmail: true
			},
			unique: true
		},
		img: {
			type: DataTypes.STRING,
			validator: {
				isUrl: true
			}
		}
	});
};
