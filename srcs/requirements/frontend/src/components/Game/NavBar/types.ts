export interface INavBar {
	mode: string;
	isWin: boolean;
	handleWinTime: (time : string) => void;
	handleMode: (mode: string) => void;
	handleSound: () => void;
	isSound: boolean;
	handleStop: any;
}

export interface IPauseMenu {
	handlePause: () => void;
	handleMode: (mode: string) => void;
	isSound: boolean;
	handleStop: any;
}