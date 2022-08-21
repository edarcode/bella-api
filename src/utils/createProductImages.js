import { createImage } from "./createImage.js";

export const createProductImages = async images => {
	const imageIds = [];
	for (let i = 0; i < images.length; i++) {
		const allImgsSizes = images[i];
		const image = await createImage(allImgsSizes);
		imageIds.push(image.id);
	}

	return imageIds;
};
