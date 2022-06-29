export interface IGame {
	mode: string;
	handleMode: (mode: string) => void;
	heuristic: string;
	isGreedy: boolean;
	isUniform: boolean;
}