const populateCells = (state, { payload }) => {
	let current = state.current.slice();
	for(let i=0; i<payload; i++){
		current.push(
		{
			id: i,
			live: false
		}
		)
	}
	return {
		...state,
		current: current
	}
}

const selectCell = (state, { payload }) => {
	return {
		...state,
		current: state.current.map(c => c.id === payload ? ({...c, live: !c.live}) : c)
	}
}

const nextGeneration = (state) => {
	console.log("hello")
	return {
		...state
	}
}


const reducer = (state, action) => {
    switch (action.type) {
    	case 'populateCells': return populateCells(state, action);
    	case 'selectCell': return selectCell(state, action);
    	case 'nextGeneration': return nextGeneration(state);
        default: return state;
    }
}
	
export default reducer;