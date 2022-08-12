import { Op, Sequelize } from "sequelize";
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

const {} = sequelize.models;

// Relaciones

export default {
	Op,
	...sequelize.models,
	conn: sequelize
};
