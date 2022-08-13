import { connDb } from "./db.js";
import { defineBill } from "./models/Bill.js";
import { defineCategory } from "./models/Category.js";
import { defineDetail } from "./models/Detail.js";
import { defineImage } from "./models/Image.js";
import { defineProduct } from "./models/Product.js";
import { defineSupplier } from "./models/Supplier.js";
import { defineUser } from "./models/User.js";

defineUser(connDb);
defineSupplier(connDb);
defineImage(connDb);
defineProduct(connDb);
defineCategory(connDb);
defineBill(connDb);
defineDetail(connDb);

export const { Product, Category, Image, Supplier, User, Bill, Detail } =
	connDb.models;

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
