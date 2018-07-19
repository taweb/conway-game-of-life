
const findNeighbours = (id, widthGrid, wrap) => {

	const left = (cell, widthGrid, wrap) => {
		if (wrap) {
			return cell % widthGrid === 0 ? cell + (widthGrid - 1) : cell - 1;
		} else {
			return cell % widthGrid === 0 ? null : cell -1;
		}
	}
	const right = (cell, widthGrid, wrap) => {
		if (wrap) {
			return (cell + 1) % widthGrid === 0 ? (cell- widthGrid) + 1 : cell + 1;
		} else {
			return (cell + 1) % widthGrid === 0 ? null : cell + 1;
		}
	}

	const top = (cell, widthGrid, wrap) => {
		if (wrap) {
			return (cell < widthGrid) ? (widthGrid * widthGrid) - (widthGrid - cell) : cell - widthGrid;
		} else {
			return (cell < widthGrid) ? null : cell - widthGrid;
		}
	}

	const bottom = (cell, widthGrid, wrap) => {
		if (wrap) {
			return (cell + widthGrid) % (widthGrid * widthGrid);
		} else {
			return ((cell + widthGrid) % (widthGrid * widthGrid) < cell) ? null : (cell + widthGrid) % (widthGrid * widthGrid);
		}
	}

	let neighboursArr = [];

	const south = bottom(id, widthGrid, wrap);
	const north = top(id, widthGrid, wrap);
	const east = right(id, widthGrid, wrap);
	const west = left(id, widthGrid, wrap);

	const northwest = north !== null ? left(north, widthGrid, wrap) : null;
	const northeast = north !== null ? right(north, widthGrid, wrap) : null;
	const southwest = south !== null ? left(south, widthGrid, wrap) : null;
	const southeast = south !== null ? right(south, widthGrid, wrap) : null;

	

	neighboursArr.push(north, south, east, west, northeast, northwest, southeast, southwest);
	const filteredArr = neighboursArr.filter(val => val !== null);
	// console.log(id);
	// console.log(neighboursArr);
	// console.log(filteredArr);
	// console.log('----------');
	return filteredArr;
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

const populateCells = (state, { payload }) => {
	const name = payload.id
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
	let nextGen = [];
	const wrap = state.options.wrap;
	state.life.map((c, i) => {
		const isLiveNow = c.live;
		const neighbourIds = findNeighbours(i, widthGrid, wrap);
		// console.log('neighbourIds', neighbourIds)
		const numLivingNeighbours = neighbourIds.reduce((acc, id) => {
			return acc + state.life[id].live
		}, 0)
		const isLiveNext = state.rules[+isLiveNow][+numLivingNeighbours]
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

const toggleWrap = (state) => {
	return {
		...state,
		options: {
			...state.options,
			wrap: !state.options.wrap
		}
	}
}

const clearGrid = (state) => {
	return {
		...state, 
		options: {
			...state.options,
			count: 0
		},
		life: state.life.map(c => !c.live)
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
		case 'toggleWrap': return toggleWrap(state);
		case 'clearGrid': return clearGrid(state);
        default: return state;
    }
}
	
export default reducer;