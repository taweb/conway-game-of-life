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