import { createUser } from "../../../utils/createUser.js";

export const registerController = async (req, res) => {
	const user = await createUser(req.body);
	if (!user) return res.status(400).json({ msg: "err" });
	res
		.status(201)
		.json({ msg: "se ha enviado un correo para verificar su registro" });
};
