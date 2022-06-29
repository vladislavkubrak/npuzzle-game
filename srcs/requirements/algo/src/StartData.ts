interface IStartData {
	map: number[];
	size: number;
	snail: any;
	heuristic?: string;
	greedy?: boolean;
	uniform?: boolean;
}

export class StartData {
	_map: number[];
	_size: number;
	_snail: any;
	_heuristic: string;
	_greedy: boolean;
	_uniform: boolean;


	constructor({map, size, snail, heuristic = 'Manhattan', greedy = false, uniform = false} : IStartData) {
		this._map = map;
		this._size = size;
		this._snail = snail;
		this._heuristic = heuristic;
		this._greedy = greedy;
		this._uniform = uniform;
	}
}
