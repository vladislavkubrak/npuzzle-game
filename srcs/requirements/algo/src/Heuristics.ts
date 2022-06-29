export class Heuristics {
	_function : (x1 : number, x2 : number, y1 : number, y2 : number) => number = (x1 : number, x2 : number, y1 : number, y2 : number) => {
		return Math.abs(x1 - x2) + Math.abs(y1 - y2);}

	_manhattan = (x1 : number, x2 : number, y1 : number, y2 : number) => {
		return Math.abs(x1 - x2) + Math.abs(y1 - y2);
	}
	_euclidean = (x1 : number, x2 : number, y1 : number, y2 : number) => {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	}
	_outOfPlace = (x1 : number, x2 : number, y1 : number, y2 : number) => {
		const diff = x1 !== x2 || y1 !== y2;
		return diff === false ? 0 : 1;
	}


	constructor(type : string) {
		console.log('TYPE: ', type)
		switch (type) {
			case 'Manhattan':
				this._function = this._manhattan;
				break;
			case 'Euclidean':
				this._function = this._euclidean;
				break;
			case 'OutOfPlace':
				this._function = this._outOfPlace;
				break;
			default:
				break;
		}
	}

	call(x1 : number, x2 : number, y1 : number, y2 : number) {
		return this._function(x1, x2, y1, y2);
	}
}

