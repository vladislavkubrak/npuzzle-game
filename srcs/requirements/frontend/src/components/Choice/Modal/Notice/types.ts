export interface INotice {
	mode: string;
	handleShowStep?: (step : number) => void;
	handleBgSound: () => void;
}
