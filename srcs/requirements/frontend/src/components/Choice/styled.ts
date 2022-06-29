import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.div`
	margin-top: 53px;
	margin-left: 62px;
	margin-bottom: 28px;
	align-self: flex-start;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	min-width: 100%;
	min-height: 83vh;
	background-image: url('./images/choiceBg.png');
	background-size: cover;
	background-repeat: no-repeat;

`;

export const Options = styled.div`
	display: flex;
	margin-top: 206px;
`;

export const Item = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	width: 511px;
	height: 353px;
`;

export const GameBtn = styled.div`
	position: relative;
	width: 511px;
	height: 353px;
	background-image: url("./images/choiceGameButton.png");
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), auto;
	transition: .3s ease;

	&::before {
		position: absolute;
		top: -115px;
		left: 132px;
		z-index: -1;
		content: '';
		width: 191px;
		height: 161px;
		background-image: url("./images/choiceGameFirstPart.png");
		background-repeat: no-repeat;
		background-size: contain;
		transition: .9s ease;
	}
	&::after {
		position: absolute;
		top: -55px;
		right: 115px;
		content: '';
		z-index: 1;
		width: 104px;
		height: 102px;
		background-image: url("./images/choiceGameSecondPart.png");
		background-repeat: no-repeat;
		background-size: contain;
		transition: .9s ease;
	}

	&:hover {
		background-image: url("./images/choiceGameButtonHover.png");	
		&::after {
			transform: scale(1.2);
		}
		&::before {
			transform: translateX(-45px);
		}
	}
	&:active {
		background-image: url("./images/choiceGameButtonActive.png");	
	}
`;

export const SolverBtn = styled.div`
	width: 511px;
	height: 353px;
	background-image: url("./images/choiceSolverButton.png");
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), auto;
	transition: .3s ease;

	&::before {
		position: absolute;
		top: -110px;
		left: 160px;
		z-index: -1;
		content: '';
		width: 280px;
		height: 146px;
		background-image: url("./images/choiceSolverFirstPart.png");
		background-repeat: no-repeat;
		background-size: contain;
		transition: .9s ease;
	}
	&::after {
		position: absolute;
		top: -75px;
		left: 198px;
		content: '';
		z-index: 1;
		width: 84px;
		height: 164px;
		background-image: url("./images/choiceSolverSecondPart.png");
		background-repeat: no-repeat;
		background-size: contain;
		transition: .9s ease;
	}


	&:hover {
		background-image: url("./images/choiceSolverButtonHover.png");
		&::after {
			transform: scale(1.2);
		}
		&::before {
			transform: translateX(45px);
		}		
	}
	&:active {
		background-image: url("./images/choiceSolverButtonActive.png");	
	}	
`;


export const Game = styled(Item)`
`;

export const Solver = styled(Item)`
	margin-left: -54px;
`;
