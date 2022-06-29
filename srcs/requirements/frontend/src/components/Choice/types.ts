export interface IItem {
	type: 'game' | 'solver';
	handleClick: (type: string) => void;
}

export interface IChoice {
	mode: string;
	handleMode: (mode: string) => void;
	handleBgSound: () => void;
	handleOptionsSolver: (type : string, isGreedy : boolean, isUniform : boolean) => void;
}