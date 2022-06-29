export interface IGameScreen {
	mode: string;
	handleWin: () => void;
	isWin: boolean;
	isSound: boolean;
	heuristic: string;
	isGreedy: boolean;
	isUniform: boolean;
}

export interface IItemGame {
	handleWin: () => void;
	isWin: boolean;
	isSound: boolean;
	heuristic?: string | 'Manhattan';
	isGreedy?: boolean;
	isUniform?: boolean;	
	isHelper?: any[];
	handleHelper?: (puzzle: any[]) => void;
}