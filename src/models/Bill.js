import { DataTypes } from "sequelize";
import { DONE, PENDING } from "../constants/billStates.js";

export const defineBill = sequelize => {
	sequelize.define("Bill", {
		state: {
			type: DataTypes.ENUM(PENDING, DONE),
			defaultValue: PENDING
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
