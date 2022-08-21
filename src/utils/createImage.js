import { Image } from "../dbRelations.js";

export const createImage = async ({ small, medium, big, original }) => {
	const [image, created] = await Image.findOrCreate({
		where: { small },
		defaults: {
			medium,
			big,
			original
		}
	});
	if (!created) return null;

	return image;
};
