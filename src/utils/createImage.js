import { Image } from "../dbRelations.js";

export const createImage = async ({ img }) => {
	const [image, created] = await Image.findOrCreate({
		where: { img }
	});
	if (!created) return null;

	return image;
};
