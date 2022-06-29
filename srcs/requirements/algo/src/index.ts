import { StartData } from './StartData';
import { Solution } from './Solution';
import dataSnail from './dataSnails';
import { getSnail } from './utils';

export const solveData = (heuristic : string, isGreedy : boolean, isUniform : boolean) => {
	const LOCATION = getSnail();
	const SIZE = Math.sqrt(LOCATION.length);
	const HEURISTIC = heuristic;
	const ISGREEDY = isGreedy;
	const ISUNIFORM = isUniform;
	
	const data : StartData = new StartData({map : LOCATION, size : SIZE, snail : dataSnail.get(SIZE), heuristic: HEURISTIC, greedy: ISGREEDY, uniform: ISUNIFORM});
	const solution : Solution = new Solution(data);
	
	solution.solver();
	solution.printSolve();

	return solution.getSolveData();
}

export const solveCurrentPuzzle = (puzzle : any[]) => {
	const LOCATION = puzzle;
	const SIZE = Math.sqrt(LOCATION.length);
	const HEURISTIC = 'Manhattan';
	const ISGREEDY = false;
	const ISUNIFORM = false;
	
	const data : StartData = new StartData({map : LOCATION, size : SIZE, snail : dataSnail.get(SIZE), heuristic: HEURISTIC, greedy: ISGREEDY, uniform: ISUNIFORM});
	const solution : Solution = new Solution(data);
	
	solution.solver();
	solution.printSolve();

	return solution.getSolveData();
}
