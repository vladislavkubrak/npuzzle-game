import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	min-width: 100%;
	height: 100%;
	padding-top: 92px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const Content = styled.div`
	position: relative;
	min-width: 853px;
	min-height: 470px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 100px;

	&::after {
		position: absolute;
		z-index: -1;
		content: '';
		width: 1134px;
		height: 92px;
		bottom: -40px;
		background-image: url('./images/startShadow.png');
		background-repeat: no-repeat;
		background-size: contain;
	}
`;

export const Title = styled.img.attrs({
	src: './images/startText.png',
	width: 853,
	height: 216,
})`
	display: block;
	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Image = styled.img.attrs({
	src: './images/startImage.png',
	width: 747,
	height: 363,
})`
	display: block;
	margin-top: -110px;
	-webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

export const Button = styled(Link)`
	position: relative;
	cursor: url("./images/cursorPointer.png"), pointer;
	width: 443px;
	height: 158px;

	background-image: url('./images/startButtonPurple.png');
	background-repeat: no-repeat;
	background-size: contain;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		&::after {
			position: absolute;
			left: -20px;
			bottom: -12px;
			content: '';
			z-index: -1;
			width: 479px;
			height: 180px;
	
			background: rgba(193, 102, 255, 0.62);
			filter: blur(29px);
			border-radius: 108px;
		}
	}
	&:active {
		&::after {
			display: none;
		}
		& > div {
			width: 370px;
			height: 123px;
			margin-left: -3px;
			background-image: url('./images/startButtonGreenActive.png');
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
`;

export const ButtonFront = styled.div`
	width: 443px;
	height: 158px;

	background-image: url('./images/startButtonGreen.png');
	background-repeat: no-repeat;
	background-size: contain;
`;