import { DataTypes } from "sequelize";
import { admin, client, master } from "../constants/roles.js";

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
			type: DataTypes.ENUM(client, admin, master),
			defaultValue: client
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
