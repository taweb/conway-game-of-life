export const populateCells = numCells => {
	return {
		type: "populateCells",
		payload: numCells
	}
}

export const selectCell = id => {
	return {
		type: "selectCell",
		payload: id 
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