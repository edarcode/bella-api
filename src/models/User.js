import { DataTypes } from "sequelize";
import { ADMIN, CLIENT, MASTER } from "../constants/roles.js";

export const defineUser = sequelize => {
	sequelize.define("User", {
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		verify: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		role: {
			type: DataTypes.ENUM(CLIENT, ADMIN, MASTER),
			defaultValue: CLIENT
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validator: {
				isEmail: true
			},
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING
		},
		tell: {
			type: DataTypes.BIGINT
		}
	});
};
