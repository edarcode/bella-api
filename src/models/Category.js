import { DataTypes } from "sequelize";

export const defineCategory = sequelize => {
	sequelize.define(
		"Category",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			img: {
				type: DataTypes.STRING,
				unique: true,
				validate: {
					isUrl: true
				}
			}
		},
		{ timestamps: false }
	);
};
