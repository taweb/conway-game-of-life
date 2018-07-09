// initial redux state
const initial = {
	options: {
		autoGeneration: false,
		count: 0
	},
	life: [],
	rules: {
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
}

export default initial;