export const destroyTuple = async (model, id) => {
	const isDestroy = await model.destroy({ where: { id } });

	return isDestroy; /* return 0 o 1 */
};
