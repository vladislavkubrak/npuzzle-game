interface INodeData {
	parent: any;
	index: string;
	move: string;
	puzzle: any[];
	cost: number;
	distance: number;
}

export interface INode {
	data : INodeData;
	major : number;
}

export class Node {
	_data: INodeData;
	_major: number;

	constructor({ data, major } : INode) {
		this._data = data;
		this._major = major;
	}
};
