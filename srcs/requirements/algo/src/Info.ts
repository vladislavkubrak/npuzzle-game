interface IInfo {
	moveCell?: number;
	timeComplexity?: number;
	spaceComplexity?: number;
	time?: number;
}

export class Info {
	_moveCell : number;
	_timeComplexity : number;
	_spaceComplexity : number;
	_time : number;

	constructor({ moveCell = 0, timeComplexity = 1, spaceComplexity = 1, time = 0 } : IInfo) {
		this._moveCell = moveCell;
		this._timeComplexity = timeComplexity;
		this._spaceComplexity = spaceComplexity;
		this._time = time;
	}
}