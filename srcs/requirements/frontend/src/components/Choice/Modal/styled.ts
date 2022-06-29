import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { isPropertySignature } from 'typescript';

export const Modal = styled.div<{ isGenerate : boolean }>`
	position: absolute;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: rgba(19, 20, 40, 0.53);	
	
	.choiceNextBtn {
		width: 427px;
		height: 150px;

		background-image: ${props => props.isGenerate ? `url("./images/choiceGenerateButton.png")` : `url("./images/choiceButtonGo.png")`};
		background-repeat: no-repeat;
		background-size: 427px 150px;
		cursor: url("./images/cursorPointer.png"), auto;
		&:hover {
			background-image: ${props => props.isGenerate ? `url("./images/choiceGenerateButtonHover.png")` : `url("./images/choiceButtonGoHover.png")`};
		}
		&:active {
			background-image: ${props => props.isGenerate ? `url("./images/choiceGenerateButtonActive.png")` : `url("./images/choiceButtonGoActive.png")`};
		}
	}
`;

export const ModalBase = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background-color: var(--background);
	border-top-left-radius: 94px;
	border-top-right-radius: 18px;
	border-bottom-left-radius: 94px;
	border-bottom-right-radius: 94px;	
`;

export const ButtonNext = styled(Link)`
	width: 427px;
	height: 150px;
	align-self: center;

	background-image: url("./images/choiceButtonGo.png");
	background-repeat: no-repeat;
	background-size: 427px 150px;
	cursor: url("./images/cursorPointer.png"), auto;
	&:hover {
		background-image: url("./images/choiceButtonGoHover.png");
	}
	&:active {
		background-image: url("./images/choiceButtonGoActive.png");
	}
`;
