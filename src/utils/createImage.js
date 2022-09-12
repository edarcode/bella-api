import { Image } from "../dbRelations.js";

export const createImage = async ({ small, medium, big, original }) => {
	const defaults = {};
	if (small) defaults.small = small;
	if (medium) defaults.medium = medium;
	if (big) defaults.big = big;
	const [image, created] = await Image.findOrCreate({
		where: { original },
		defaults
	});
	if (!created) return null;

	return image;
};
