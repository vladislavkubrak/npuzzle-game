import { Link } from 'react-router-dom';
import * as Animation from '../../config/Animation';
import styled from 'styled-components';

export const ModalFinish = styled.div`
	position: absolute;
	z-index: 10;
	left: 0;
	top: -65px;
	width: 100vw;
	height: 100vh;
	background: rgba(19, 20, 40, 0.45);
	animation: ${Animation.text} 2s ease-in-out 1;
`;

export const ModalWin = styled.div`
	position: absolute;
	top: 300px;
	left: 153px;
	z-index: 1;
	width: 638px;
	height: 386px;

	background-image: url("./images/modalWin.png");
	background-repeat: no-repeat;
	background-size: contain;
	transition: 2s ease-in-out;
`

export const Cup = styled.div`
	z-index: 10;
	position: absolute;
	top: -125px;
	left: 165px;
	width: 246px;
	height: 255px;
	background-image: url("./images/cup.png");
	background-repeat: no-repeat;
	background-size: contain;
	animation: ${Animation.cupSlow} 2s infinite ease-in-out;
	transition: 2s ease-in-out;
`;

export const LightLeft = styled.div`
	z-index: 8;
	position: absolute;
	top: -40px;
	left: 165px;
	width: 95px;
	height: 91px;
	background-image: url("./images/leftLight.png");
	background-repeat: no-repeat;
	background-size: contain;	
	animation: ${Animation.cup} 2s infinite linear;
`

export const Light = styled.div`
	z-index: 8;
	position: absolute;
	top: -107px;
	left: 203px;	
	width: 98px;
	height: 110px;
	background-image: url("./images/middleLight.png");
	background-repeat: no-repeat;
	background-size: contain;		
	animation: ${Animation.cup} 2s infinite linear;
`

export const LightRight = styled.div`
	z-index: 8;
	position: absolute;
	top: -124px;
	left: 317px;	
	width: 91px;
	height: 137px;	
	background-image: url("./images/rightLight.png");
	background-repeat: no-repeat;
	background-size: contain;	
	animation: ${Animation.cup} 2s infinite linear;
`

export const Text = styled.div<{ mode : string }>`
	margin: 0;
	padding: 0;
	margin: 0 auto;
	margin-top: 135px;
	margin-bottom: 48px;

	max-width: 500px;
	height: 66px;
	background-image: ${props => props.mode === 'game' 
		? `url("./images/textSolvedGame.png")` 
		: `url("./images/textSolvedSolver.png")`};
	background-repeat: no-repeat;
	background-size: contain;
`;

export const Button = styled(Link)`
	display: block;
	margin: 0 auto;
	width: 290px;
	height: 102px;
	background-image: url("./images/finishButton.png");
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), pointer;
	animation: ${Animation.wiggle} 2s linear 1;
	animation-delay: 2s;
	
	&:hover {
		background-image: url("./images/finishButtonHover.png");
	}
	
	&:active {
		background-image: url("./images/finishButtonActive.png");
	}
`;