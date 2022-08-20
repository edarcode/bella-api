import { DataTypes } from "sequelize";

export const defineProduct = sequelize => {
	sequelize.define("Product", {
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		subName: {
			type: DataTypes.STRING
		},
		buyPrice: {
			type: DataTypes.REAL,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		salePrice: {
			type: DataTypes.REAL,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		discount: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				min: 0,
				max: 100
			}
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});
};
