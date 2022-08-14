import { createImage } from "./createImage.js";

export const createProductImages = async images => {
	const imageIds = [];
	for (let i = 0; i < images.length; i++) {
		const img = images[i];
		const image = await createImage({ img });
		imageIds.push(image.id);
	}

	return imageIds;
};
