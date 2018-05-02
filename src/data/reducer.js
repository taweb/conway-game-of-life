
const addCell = (state, { payload }) => {
	// get copy of current player array
	let current = state.current.slice();
	// set up new player object to be added to array
	let entry = {
		id: payload,
		live: false
	}
	current.push(entry); 
	return {
		...state,
		current: current,
	}
}


const reducer = (state, action) => {
    switch (action.type) {
    	case 'addCell': return addCell(state, action);
    	// case 'editPlayer': return editPlayer(state, action);
    	// case 'deletePlayer': return deletePlayer(state, action);
    	// case 'generateTournament': return generateTournament(state, action);
        default: return state;
    }
}
	
export default reducer;