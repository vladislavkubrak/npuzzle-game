import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const NavBar = styled.header`
	width: 90%;
	height: 106px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	margin-top: 64px;
	margin-bottom: 65px;
`;

export const Logo = styled.div<{ isGame : boolean }>`
	width: 238px;
	height: 58px;

	background-image: ${props => props.isGame
		? `url("./images/gameGameTitle.png")`
		: `url("./images/gameSolveTitle.png")`};
	background-repeat: no-repeat;
	background-size: 238px 58px;
`

export const Timer = styled.div<{ isWin : boolean }>`
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 900;
	font-size: 27px;
	line-height: 37px;
	color: #fff;
	opacity: ${props => props.isWin ? `0` : `1`};

	width: 196px;
	margin-left: -70px;
	height: 56px;
	background: linear-gradient(180deg, #85679E 0%, #3B1A56 100%);
	box-shadow: inset 0px 4px 4px rgba(247, 207, 254, 0.25), inset 0px -14px 11px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
  	transform-style: preserve-3d;

	&::after {
		position: absolute;
		z-index: -1;
		content: '';
		top: -21px;
		left: -22px;
		width: 311px;
		height: 106px;
		background-image: url("./images/gameTimer.png");
		background-repeat: no-repeat;
		background-size: 311px 106px;
		transform: translateZ(-1px);
	}
`

export const WinTimer = styled(Timer)`
	position: absolute;
	z-index: 1;
	top: 85px;
	left: 415px;
	background: transparent;
	opacity: 1;
	&::after {
		background-image: url("./images/gameTimerWin.png");
	}
`

export const Settings = styled.div`
	display: flex;
	justify-content: space-between;
	width: 213px;
	height: 96px;
	margin-top: 20px;
`

export const Sound = styled.div<{ isWin : boolean, isActive : boolean }>`
	opacity: ${props => props.isWin ? `0` : `1`};
	width: 88px;
	height: 96px;
	background-image: ${props => props.isActive ? `url("./images/gameSoundOn.png")` : `url("./images/gameSoundOff.png")`};
	background-repeat: no-repeat;
	background-size: 88px 96px;
	cursor: url("./images/cursorPointer.png"), pointer;
`

export const Pause = styled.div<{ isWin : boolean, mode : string }>`
	opacity: ${props => props.isWin || props.mode === 'solver' ? `0` : `1`};
	width: 88px;
	height: 96px;
	background-image: url("./images/gamePause.png");
	background-repeat: no-repeat;
	background-size: 88px 96px;
	cursor: ${props => props.isWin || props.mode === 'solver' ? `url("./images/cursor.png"), default` : `url("./images/cursorPointer.png"), pointer`};
`

export const PauseBox = styled.div`
	position: absolute;
	z-index: 5;
	height: 100vh;
	width: 100vw;
	background: rgba(19, 20, 40, 0.45);
	left: 0;
	top: -65px;
`

export const PauseMenu = styled.div`
	position: absolute;
	z-index: 4;
	width: 560px;
	height: 583px;
	right: 5%;
	top: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-image: url("./images/pauseMenu.png");
	background-repeat: no-repeat;
	background-size: contain;
`

export const PauseMenuButton = styled.div`
	position: absolute;
	top: 30px;
	right: 130px;
	width: 88px;
	height: 96px;
	background-image: url("./images/gamePlay.png");
	background-repeat: no-repeat;
	background-size: 88px 96px;
	cursor: url("./images/cursorPointer.png"), pointer;
`

export const Resume = styled.div`
	width: 324px;
	height: 105px;
	margin-top: 90px;

	background-image: url("./images/resumeButton.png");
	&:hover {
		background-image: url("./images/resumeButtonHover.png");
	}
	&:active {
		background-image: url("./images/resumeButtonActive.png");
	}
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), pointer;
`


export const Giveup = styled.div`
	width: 324px;
	height: 105px;

	background-image: url("./images/giveupButton.png");
	&:hover {
		background-image: url("./images/giveupButtonHover.png");
	}
	&:active {
		background-image: url("./images/giveupButtonActive.png");
	}	
	background-repeat: no-repeat;
	background-size: contain;	
	cursor: url("./images/cursorPointer.png"), pointer;
`

export const Exit = styled(Link)`
	display: block;
	width: 324px;
	height: 105px;
	margin-top: 28px;

	background-image: url("./images/exitButton.png");
	&:hover {
		background-image: url("./images/exitButtonHover.png");
	}
	&:active {
		background-image: url("./images/exitButtonActive.png");
	}	
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), pointer;
`