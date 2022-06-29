import { Node, INode } from './Node';
var Heap = require('mnemonist/heap');

export class Queue {
	_items: any;

	constructor() {
		this._items = new Heap((a : Node, b : Node) => {
			if (a._major > b._major)
				return 1;
			if (a._major < b._major)
				return -1;
			return 0;
		});
	}

	push({ data, major } : INode) {
		this._items.push(new Node({data, major}));
	}
		
	pop() {
		return this._items.size > 0 ? this._items.pop() : null;
	}
};
