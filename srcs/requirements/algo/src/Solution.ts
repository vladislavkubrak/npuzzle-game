import { cloneDeep, find, findIndex } from 'lodash';
import { Settings } from './Settings';
import { Info } from './Info';
import { StartData } from './StartData';
import { States } from './States';

const FOUR_SIZE = 37;
const THREE_SIZE = 7;

export class Solution {
	_info : Info;
	_settings : Settings;
	_states : States;

	_size : number;
	_puzzle : any[];
	_snail : any[];
	_isSolvable : boolean = true;

	constructor(data : StartData) {
		this._info = new Info({});
		this._settings = new Settings({heuristic: data._heuristic, greedy: data._greedy, uniform: data._uniform});
		this._states = new States({});

		this._size = data._size;
		this._puzzle = this._convertPuzzleToData(data._map, this._size);
		this._snail = data._snail;
	}

	_createIndex(puzzle : any[]) {
		let index : string = '';
		
		for (let y = 0; y < this._size; y++) {
			let x = 0;
			for (; x < this._size; x++)
				index += `${find(puzzle, { x, y }).val}`;
		}
		return index;
	}

	_getDistance(puzzle : any[]) {
		let distance = 0;
		puzzle.forEach((el) => {
			const snail = find(this._snail, { val: el.val });
			if (snail.val !== 0) {
				distance += this._settings._typeFunc.call(snail.x, el.x, snail.y, el.y);
			}
		});
		if (distance > 0 && this._settings._uniform) {
			return 1;
		} 
		return distance;
	}

	_updateSpaceComplexity() {
		this._info._spaceComplexity = Math.max(this._info._spaceComplexity, this._states._openList._items.size);
	}

	_tilesWork(el : any, move : string) {
		const puzzle = cloneDeep(el.puzzle);
		const i = findIndex(puzzle, { val: 0 });

		let j;
		switch (move) {
			case 'bot':
				j = findIndex(puzzle, { x: puzzle[i].x, y: puzzle[i].y + 1 });
				break;
			case 'top':
				j = findIndex(puzzle, { x: puzzle[i].x, y: puzzle[i].y - 1 });
				break;
			case 'left':
				j = findIndex(puzzle, { x: puzzle[i].x - 1, y: puzzle[i].y });
				break;
			case 'right':
				j = findIndex(puzzle, { x: puzzle[i].x + 1, y: puzzle[i].y });
				break;
			default:
				j = -1;
				break;
		}
	
		if (move !== 'top' && move !== 'bot')
			[puzzle[i].x, puzzle[j].x] = [puzzle[j].x, puzzle[i].x];
		else 
			[puzzle[i].y, puzzle[j].y] = [puzzle[j].y, puzzle[i].y];


		const distance = this._getDistance(puzzle);
		const index = this._createIndex(puzzle);
	
		if (this._settings._greedy === false) {
			const alreadyChecked = find(this._states._closedList, { index });
			if (alreadyChecked && alreadyChecked.cost <= el.cost + 1 && alreadyChecked.move === move) {
				return;
			}
		}
		this._states._openList.push({
			data : {
				parent : el.index,
				index,
				move,
				puzzle,
				cost : el.cost + 1,
				distance,
			},
			major: distance + 1 + el.cost,
		});
	}

	printSolve() {
		console.log('');
		console.log(`Number of moves: ${this._info._moveCell}`);
		console.log(`Time: ${this._info._time}`);
		console.log(`Time complexity: ${this._info._timeComplexity}`);
		console.log(`Space complexity: ${this._info._spaceComplexity}`);
		console.log('');
		this._states._targetList.forEach((el, i) => {
			this.printPuzzle(el.puzzle);
		})
	}

	_getSuccessPuzzle() {
		const answers : any[] = [];

		this._states._targetList.forEach((el, i) => {
			let y = 0;
			const answer = [];
			while (y < this._size) {
				let x = 0;
				while (x < this._size) {
					const obj = find(el.puzzle, { x, y });
					answer.push(obj.val);
					x += 1;
				}
				y += 1;
			}
			answers.push(answer);
		});
		return answers;
	}

	checkActive(data : number[]) : boolean[] {
		const result : boolean[] = new Array(9).fill(false);
		const zeroIndex = data.indexOf(0);
	
		if (zeroIndex === 0) {
			result[1] = true;
			result[3] = true;
		} else if (zeroIndex === 1) {
			result[0] = true;
			result[2] = true;
			result[4] = true;
		} else if (zeroIndex === 2) {
			result[1] = true;
			result[5] = true;
		} else if (zeroIndex === 3) {
			result[0] = true;
			result[4] = true;
			result[6] = true;
		} else if (zeroIndex === 4) {
			result[1] = true;
			result[3] = true;
			result[5] = true;
			result[7] = true;
		} else if (zeroIndex === 5) {
			result[2] = true;
			result[4] = true;
			result[8] = true;
		} else if (zeroIndex === 6) {
			result[3] = true;
			result[7] = true;
		} else if (zeroIndex === 7) {
			result[4] = true;
			result[6] = true;
			result[8] = true;
		} else if (zeroIndex === 8) {
			result[5] = true;
			result[7] = true;
		}
	
		return result;
	}

	_getActiveCells(data : number[][]) {
		const cells : any[] = [];

		data.forEach((el) => {
			cells.push(this.checkActive(el));
		})

		return cells;
	}

	getSolveData() {
		const data : any = {};
		data['moves'] = this._info._moveCell;
		data['timeComplexity'] = this._info._timeComplexity;
		data['spaceComplexity'] = this._info._spaceComplexity;
		data['puzzles'] = this._getSuccessPuzzle();
		data['activeCells'] = this._getActiveCells(data['puzzles']);
		return data;
	}

	printPuzzlePaddedValue(value : any) {
		let str = value.toString();
		const aimedSize = ((this._size ** 2) - 1).toString().length;
		while (str.length < aimedSize) {
		  str = ` ${str}`;
		}
		return str;
	}
	
	printPuzzle(puzzle : any) {
		let y = 0;
		let result = '';
		while (y < this._size) {
			let x = 0;
			while (x < this._size) {
				const obj = find(puzzle, { x, y });
				result += `${this.printPuzzlePaddedValue(obj.val)}`;
				x += 1;
				if (x < this._size) result += ' ';
			}
			result += '\n';
			y += 1;
		}
		console.log(result);
	}


	solver() {
		const time = performance.now();
		this._states._openList.push({
			data : {
				parent : null,
				index : this._createIndex(this._puzzle),
				move : '',
				puzzle : cloneDeep(this._puzzle),
				cost : 0,
				distance: this._getDistance(this._puzzle)},
			major: 0});

		while (true) {
			this._updateSpaceComplexity();
			const { _data } = this._states._openList.pop();
			this._states._closedList.push(_data);
			if (_data.distance === 0) {
				this._info._time = +((performance.now() - time) / 1000).toFixed(5);
				this._info._moveCell = _data.cost;
				this._info._timeComplexity = this._states._closedList.length;
				this._build();
				break ;
			}
			this._handleMove(_data, find(_data.puzzle, { val: 0 }));		 
		}
	}

	_build() {
		let pointer = this._states._closedList[this._states._closedList.length - 1];
		while (pointer) {
			this._states._targetList.unshift(pointer);
			pointer = find(this._states._closedList, {index: pointer.parent});
		}
  	}

	_handleMove(el : any, hall : any) {
		if (el.move !== 'top' && hall.y + 1 < this._size) this._tilesWork(el, 'bot');
		if (el.move !== 'bot' && hall.y) this._tilesWork(el, 'top');
		if (el.move !== 'left' && hall.x + 1 < this._size) this._tilesWork(el, 'right');
		if (el.move !== 'right' && hall.x) this._tilesWork(el, 'left');
	}

	_checkSolvable() {
		const puzzle = this._puzzle;
		let puzzleInversions = 0;
		let snailInversions = THREE_SIZE;
		
		for (let i = 0; i < puzzle.length; i++) {
			for (let j = i + 1; j < puzzle.length; j++) {
				if (puzzle[i].val === 0) continue;
				else if (puzzle[i].val > puzzle[j].val && puzzle[j].val !== 0) puzzleInversions++;
			}
		}
		this._isSolvable = (puzzleInversions % 2 + snailInversions % 2) % 2 == 0;
	}

	_convertPuzzleToData(map : number[], size : number) {
		const puzzle : any[] = [];
		let stepX : number = 0;
		let stepY : number = 0;
		
		for (let i = 0; i < map.length; i++) {
			puzzle.push({x: stepX, y: stepY, val: map[i]});
			if (stepX > 0 && (stepX + 1) % size === 0) stepY++;
			stepX = stepX + 1 === size ? 0 : stepX + 1;
		}
		
		return puzzle;
	}
};
