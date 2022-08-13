import jwt from "jsonwebtoken";

export const createToken = (dataToSave, expiresIn) => {
	const token = jwt.sign(dataToSave, process.env.SECRET, { expiresIn });

	return token;
};
