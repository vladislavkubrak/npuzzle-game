export interface IHeuristic {
	handleShowStep: (step : number) => void;
	handleClose: (type : string) => void;
	handleOptionsSolver: (type : string, isGreedy : boolean, isUniform : boolean) => void;
}
