let _ = require('underscore')

let mainArray = [[10, 90, 100],[20, 10],[30, 50, 20]];
let arrToSearch = [10, 20]

//let mainArray = [["10", "90", "100"],["20", "10"],["30", "50", "20"]];
//let arrToSearch = ["10","50"]

let arrayExists = () => {
	let bool = false
	_.each(mainArray, function (value){
		if(_(arrToSearch).difference(value).length === 0){
			bool = true
		}
	})
	return bool
}

console.log('Does array exists ===>>>',arrayExists())