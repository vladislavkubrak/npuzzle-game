import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { ModalBase } from '../styled';

export const Heuristic = styled(ModalBase)`
	position: relative;
	width: 979px;
	height: 663px;

	& > .choiceNextBtn {
		align-self: center;
	}
`;

export const CloseButton = styled.div`
	position: absolute;
	content: '';
	top: -18px;
	right: -18px;

	width: 68px;
	height: 66px;

	background-image: url("./images/closeButton.png");
	background-repeat: no-repeat;
	background-size: contain;
	cursor: url("./images/cursorPointer.png"), pointer;
`;

export const Title = styled.p`
	margin: 0;
	margin-top: 68px;
	margin-bottom: 72px;
	padding: 0;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 900;
	font-size: 55px;
	line-height: 70px;

	text-align: center;
	
	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

	color: #fff;	
`;

export const HeuOptions = styled.div`
	position: relative;
	display: flex;
	margin: 0 auto;
	margin-bottom: 74px;
	&::after {
		position: absolute;
		z-index: 1;
		content: '';
		left: -38px;
		bottom: 0;
		width: 979px;
		height: 7px;
		background-image: url("./images/divider.svg");
		background-repeat: no-repeat;
		background-size: 979px 7px;
	}
`;

export const HeuItem = styled.div<{ active : boolean }>`
	position: relative;
	z-index: 2;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 800;
	font-size: 38px;
	line-height: 125%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 301px;
	height: 75px;

	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
	
	border-top-left-radius: 31px;
	border-top-right-radius: 31px;
	cursor: url("./images/cursorPointer.png"), auto;
	transition: .2s ease;
	
	color: ${props => props.active ? '#fff' : '#ABABAB'};
	background-color: ${props => props.active ? `#694F7E` : 'transparent'};
	${props => props.active && css`
		&::after {
			position: absolute;
			bottom: -9px;
			content: '';
			z-index: 10;
			height: 9px;
			width: 301px;
			background-image: url('./images/choiceHeuristicActive.svg');
			background-repeat: no-repeat;
			background-size: 301px 9px;
		}
	`}
`;

export const Adds = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	margin: 0 auto;
	margin-bottom: 60px;
`;

export const AddsItem = styled.li`
	margin: 0;
	padding: 0;
	display: flex;
	height: 62px;
	align-items: center;
	&:not(:last-child) {
		margin-right: 48px;
	}

	input + label::before {
		position: absolute;
		content: '';
		left: 0;
		width: 62px;
		height: 62px;
		background-image: url('./images/checkbox.svg');
		background-repeat: no-repeat;
		background-size: 62px 62px;
	}
	input:checked + label::before {
		background-image: url('./images/checkboxChecked.svg');
		background-repeat: no-repeat;
		background-size: 62px 62px;
	}

	input:checked + label {
		color: #fff;
	}

`;

export const Input = styled.input`
	display: none;
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	cursor: url("./images/cursorPointer.png"), auto;
	user-select: none;
	position: relative;
	padding: 0;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 600;
	height: 62px;
	font-size: 34px;
	line-height: 125%;
	padding-left: 78px;
	color: #ABABAB;
`;
