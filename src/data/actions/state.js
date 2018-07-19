export const populateCells = (cells, id) => {
	return {
		type: "populateCells",
		payload: {
			cells,
			id
		}
	}
}

export const selectCell = (id, gridId) => {
	return {
		type: "selectCell",
		payload: {
			id,
			gridId
		} 
	}
}

export const nextGeneration = () => {
	return {
		type: "nextGeneration"
	}
}

export const toggleAutoGeneration = () => {
	return {
		type: "toggleAutoGeneration"
	}
}

export const randomise = factor => {
	return {
		type: "randomise",
		payload: factor
	}
}

export const selectRule = id => {
	return {
		type: "selectRule",
		payload: id
	}
}

export const resetRules = () => {
	return {
		type: "resetRules"
	}
}

export const toggleWrap = () => {
	return {
		type: "toggleWrap"
	}
}

export const clearGrid = () => {
	return {
		type: "clearGrid"
	}
}