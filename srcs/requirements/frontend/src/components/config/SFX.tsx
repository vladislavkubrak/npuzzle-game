import UIFx from 'uifx';
const hover = require("../../sounds/hover3.mp3");
const hover2 = require("../../sounds/hover7.mp3");
const click = require("../../sounds/click4.mp3");
const clickgame = require("../../sounds/clickGame.mp3");
const clickpause = require("../../sounds/pauseClick.mp3");
const clickSolveMenu = require("../../sounds/clickSolveMenu.mp3");
const clickSolveMenu2 = require("../../sounds/clickSolveMenu2.mp3");
const clickclose = require("../../sounds/clickClose.mp3");
const winsound = require("../../sounds/win.mp3");

const winSound = new UIFx(
	winsound,
	{
		volume: 0.2,
		throttleMs: 100
	}
)

const startClick = new UIFx(
	click,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

const clickClose = new UIFx(
	clickclose,
	{
		volume: 0.4,
		throttleMs: 100
	}
)

const gameClick = new UIFx(
	clickgame,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

const solveClick = new UIFx(
	clickSolveMenu,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

const solveClick2 = new UIFx(
	clickSolveMenu2,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

const clickPause = new UIFx(
	clickpause,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

const startHover = new UIFx(
	hover,
	{
		volume: 0.3,
		throttleMs: 100
	}
)

const startHover2 = new UIFx(
	hover2,
	{
		volume: 0.1,
		throttleMs: 100
	}
)

export const handleClickSound = () => {
	startClick.play();
}
export const handleHoverSound = (type : number) => {
	if (type === 1) {
		startHover.play();
	} else if (type === 2) {
		startHover2.play();
	}
}

export const handleGameClickSound = () => {
	gameClick.play();
}

export const handleClickSolveSound = () => {
	solveClick.play();
}

export const handleClickSolveSound2 = () => {
	solveClick2.play();
}

export const handleClickPause = () => {
	clickPause.play();
}

export const handleClickClose = () => {
	clickClose.play();
}

export const handleWinSound = () => {
	winSound.play();
}