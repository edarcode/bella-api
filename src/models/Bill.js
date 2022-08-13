import { DataTypes } from "sequelize";
import { done, pending } from "../constants/billStates.js";

export const defineBill = sequelize => {
	sequelize.define("Bill", {
		state: {
			type: DataTypes.ENUM(pending, done),
			defaultValue: pending
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tell: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	});
};
