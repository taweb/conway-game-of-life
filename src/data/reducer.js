const findNeighbours = (id, widthGrid) => {

	const left = (cell, widthGrid) => cell % widthGrid === 0 ? cell + (widthGrid - 1) : cell - 1;
	const right = (cell, widthGrid) => (cell + 1) % widthGrid === 0 ? (cell- widthGrid) + 1 : cell + 1;

	let neighboursArr = [];

	const south = (id + widthGrid) % (widthGrid * widthGrid);
	const north = (id < widthGrid) ? (widthGrid * widthGrid) - (widthGrid - id) : id - widthGrid;
	const east = (id + 1) % widthGrid === 0 ? (id - widthGrid) + 1 : id + 1;
	const west = id % widthGrid === 0 ? id + (widthGrid - 1) : id - 1;

	const northwest = left(north, widthGrid);
	const northeast = right(north, widthGrid);
	const southwest = left(south, widthGrid);
	const southeast = right(south, widthGrid);

	neighboursArr.push(north, south, east, west, northeast, northwest, southeast, southwest);

	return neighboursArr;
}

const initialRules = {
	0: {
		0: false,
		1: false,
		2: false,
		3: true,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false
	},
	1: {
		0: false,
		1: false,
		2: true,
		3: true,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false
	}
}

const evaluateCell = (liveNeighbours, living) => {
	if(living){
		if(liveNeighbours < 2 || liveNeighbours > 3 ) {
			return false;
		} 
		return true;
	}else{
		return liveNeighbours === 3;
	}
}

const populateCells = (state, { payload }) => {
	const name = payload.id
	console.log(payload.cells)
	const copy = state[name].slice();
	for(let i=0; i<payload.cells; i++){
		copy.push(
		{
			id: i,
			live: false
		}
		)
	}
	return {
		...state,
		[name]: copy
	}
}

const selectCell = (state, { payload }) => {
	const { id, gridId } = payload
	return {
		...state,
		[gridId]: state[gridId].map(c => c.id === id ? ({...c, live: !c.live}) : c),
		options: {
			...state.options,
			count: 0
		}
	}
}

const nextGeneration = (state) => {
	const widthGrid = Math.sqrt(state.life.length);
	// console.log(widthGrid);
		let nextGen = [];
	state.life.map((c, i) => {
		const isLiveNow = c.live;
		const neighbourIds = findNeighbours(i, widthGrid);
		// console.log("Neighbour Ids", neighbourIds) 
		const numLivingNeighbours = neighbourIds.reduce((acc, id) => {
			return acc + state.life[id].live; 
		}, 0)
		// const isLiveNext = evaluateCell(numLivingNeighbours, isLiveNow);
		const isLiveNext = state.rules[+isLiveNow][+numLivingNeighbours]
		// console.log(isLiveNext)
		// console.log(c)
		return nextGen.push({...c, live: isLiveNext})
	})

	return {
		...state,
		life: state.life.map((item, i) => item.live === nextGen[i].live ? item : nextGen[i]),
		options: {
			...state.options,
			count: state.options.count + 1
		}
	}
}

const toggleAutoGeneration = (state) => {
	const { autoGeneration } = state.options;
	return {
		...state,
		options: {
			...state.options,
			autoGeneration: !autoGeneration
		}
	}
}

const randomise = (state, action) => {
	// console.log(action.payload)
	// console.log(Math.random() >= 0.5)

	let newGen = []
	state.life.map((c, i) => {
		let bool = Math.floor(Math.random() * 100 + 1) <= action.payload
		return newGen.push(bool)
	})	

	return {
		...state,
		life: state.life.map((item, i) => item.live === newGen[i] ? item : {...item, live: newGen[i]}),
		options: {
			...state.options,
			count: 0
		}
	}
}

const selectRule = (state, action) => {
	const ruleCategory = action.payload <= 8 ? 0 : 1
	const subKey = ruleCategory === 1 ? action.payload - 9 : action.payload
	return {
		...state,
		rules: {
			...state.rules,
			[ruleCategory]: {
				...state.rules[ruleCategory],
				[subKey]: !state.rules[ruleCategory][subKey]
			}
		}
	}
}

const resetRules = (state) => {
	return {
		...state,
		rules: initialRules
	}
} 


const reducer = (state, action) => {
    switch (action.type) {
    	case 'populateCells': return populateCells(state, action);
    	case 'selectCell': return selectCell(state, action);
    	case 'nextGeneration': return nextGeneration(state);
    	case 'toggleAutoGeneration': return toggleAutoGeneration(state);
		case 'randomise': return randomise(state, action);
		case 'selectRule': return selectRule(state, action);
		case 'resetRules': return resetRules(state);
        default: return state;
    }
}
	
export default reducer;