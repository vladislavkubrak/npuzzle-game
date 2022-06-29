export interface IModal {
	mode: string;
	handleCloseClick: (type: string) => void;
	handleBgSound: () => void;
	handleOptionsSolver: (type : string, isGreedy : boolean, isUniform : boolean) => void;
}
