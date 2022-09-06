export const verifyTokenController = async (req, res, next) => {
	const {
		user: { role, email }
	} = req;
	try {
		res.status(200).json({ email, role });
	} catch (error) {
		next(error);
	}
};
