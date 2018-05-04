
// const addCell = (state, { payload }) => {
// 	// get copy of current player array
// 	let current = state.current.slice();
// 	// set up new player object to be added to array
// 	let entry = {
// 		id: payload,
// 		live: false
// 	}
// 	current.push(entry); 
// 	return {
// 		...state,
// 		current: current,
// 	}
// }

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


const reducer = (state, action) => {
    switch (action.type) {
    	// case 'addCell': return addCell(state, action);
    	case 'populateCells': return populateCells(state, action);
    	case 'selectCell': return selectCell(state, action);
    	// case 'editPlayer': return editPlayer(state, action);
    	// case 'deletePlayer': return deletePlayer(state, action);
    	// case 'generateTournament': return generateTournament(state, action);
        default: return state;
    }
}
	
export default reducer;