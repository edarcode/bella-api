import { DataTypes } from "sequelize";

export const defineImage = sequelize => {
	sequelize.define(
		"Image",
		{
			small: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isUrl: true
				}
			},
			medium: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isUrl: true
				}
			},
			big: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isUrl: true
				}
			},
			original: {
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
