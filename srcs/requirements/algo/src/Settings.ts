import { Heuristics } from "./Heuristics";

interface ISettings {
	heuristic?: string;
	greedy?: boolean;
	uniform?: boolean;
}

export class Settings {
	_heuristic : string;
	_greedy : boolean;
	_uniform : boolean;
	_typeFunc : Heuristics;

	constructor({ heuristic = 'Manhattan', greedy = false, uniform = false } : ISettings) {
		this._heuristic = heuristic;
		this._greedy = greedy;
		this._uniform = uniform;
		this._typeFunc = new Heuristics(this._heuristic);
	}
}