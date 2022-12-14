//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import "dotenv/config";
import { transporter } from "./src/config/nodemailer.js";
import { connDb } from "./src/db.js";
import server from "./src/server.js";
import { createMaster } from "./src/utils/createMaster.js";
import { fillBill } from "./src/utils/fillBill.js";
import { fillCategory } from "./src/utils/fillCategory.js";
import { fillProduct } from "./src/utils/fillProduct.js";
import { fillSupplier } from "./src/utils/fillSupplier.js";

// Syncing all the models at once..
connDb.sync({ force: true }).then(() => {
	server.listen(process.env.PORT, async () => {
		try {
			await transporter.verify();
			await createMaster();
			await fillCategory();
			await fillSupplier();
			await fillProduct();
			await fillBill();

			console.log(`Server running on port: ${process.env.PORT} 😎`); // eslint-disable-line no-console
		} catch (error) {
			console.log(error);
		}
	});
});
