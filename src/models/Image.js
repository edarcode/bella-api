import { DataTypes } from "sequelize";

export const defineImage = sequelize => {
	sequelize.define(
		"Image",
		{
			img: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isUrl: true
				}
			}
		},
		{ timestamps: false }
	);
};
