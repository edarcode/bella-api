import { Op, Sequelize } from "sequelize";
import { defineBill } from "./models/Bill.js";
import { defineCategory } from "./models/Category.js";
import { defineDetail } from "./models/Detail.js";
import { defineImage } from "./models/Image.js";
import { defineProduct } from "./models/Product.js";
import { defineSupplier } from "./models/Supplier.js";
import { defineUser } from "./models/User.js";

const sequelize =
	process.env.NODE_ENV === "production"
		? new Sequelize({
				database: process.env.DB_NAME,
				dialect: "postgres",
				host: process.env.DB_HOST,
				port: 5432,
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				pool: {
					max: 3,
					min: 1,
					idle: 10000
				},
				dialectOptions: {
					ssl: {
						require: true,
						// Ref.: https://github.com/brianc/node-postgres/issues/2009
						rejectUnauthorized: false
					},
					keepAlive: true
				},
				ssl: true
		  })
		: new Sequelize(
				`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
				{ logging: false, native: false }
		  );

defineUser(sequelize);
defineSupplier(sequelize);
defineImage(sequelize);
defineProduct(sequelize);
defineCategory(sequelize);
defineBill(sequelize);
defineDetail(sequelize);

const { Product, Category, Image, Supplier, User, Bill, Detail } =
	sequelize.models;

// Relaciones

Product.belongsToMany(Category, {
	as: "categories",
	through: "ProductCategory",
	timestamps: false
});
Category.belongsToMany(Product, {
	through: "ProductCategory",
	timestamps: false
});

Product.belongsToMany(Image, {
	as: "images",
	through: "ProductImage",
	timestamps: false
});
Image.belongsToMany(Product, {
	through: "ProductImage",
	timestamps: false
});

Product.belongsToMany(Supplier, {
	as: "suppliers",
	through: "ProductSupplier"
});
Supplier.belongsToMany(Product, { through: "ProductSupplier" });

User.hasMany(Bill);
Bill.belongsTo(User);

Bill.belongsToMany(Product, { through: Detail });
Product.belongsToMany(Bill, { through: Detail });

export default {
	Op,
	...sequelize.models,
	conn: sequelize
};
