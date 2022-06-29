import { Queue } from './Queue';

interface IStates {
	openList?: Queue;
	targetList?: any[];
	// targetList?: Set;
	closedList?: any[];
	// closedList?: Set;
}

export class States {
	_openList : Queue;
	_targetList : any[];
	// targetList?: Set;
	_closedList : any[];
	// closedList?: Set;


	constructor({ openList = new Queue(), targetList = [], closedList = [] } : IStates) {
		this._openList = openList;
		this._targetList = targetList;
		this._closedList = closedList;
	}
}
