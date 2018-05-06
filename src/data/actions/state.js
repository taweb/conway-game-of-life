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