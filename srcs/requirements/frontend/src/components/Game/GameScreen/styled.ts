import styled, {css} from 'styled-components';
import * as Animation from '../../config/Animation';

export const GameScreen = styled.div<{ isWin : boolean }>`
	padding: 0;
	margin: 0;
	border: none;
	
	margin-left: auto;
	${props => !props.isWin && css`
		margin: 0 auto;
		padding: 0;
	`}
	${props => props.isWin && css`
		animation: ${Animation.drive} 1s ease-in-out 1;
	`}

	width: 576px;
	height: 598px;
	border-radius: 31px;
	background-image: url("./images/gameField.png");
	background-repeat: no-repeat;
	background-size: 576px 598px;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	padding-top: 23px;
	padding-left: 23px;
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
	list-style-type: none;
`;

export const Item = styled.li<{ isActive : boolean, isWin : boolean, num : number }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 174px;
	height: 179px;
	background: #4B3C57;
	box-shadow: inset 3px 3px 4px #51425B, inset -2px -3px 4px rgba(0, 0, 0, 0.17), inset -27px -13px 76px #392E42;
	border-radius: 15px;
	transition: .4s ease;

	&::before {
		position: absolute;
		content: '';

		width: 154px;
		height: 152px;

		top: 13px;
		left: 10px;
		transition: .4s ease;

		background-image: ${props => !props.num ? `` : `url("./images/gameDiamondCell.png")`} ;
		background-repeat: no-repeat;
		background-size: 154px 152px;
	}
	&::after {
		opacity: 0;
		display: inline-block;
		position: absolute;
		content: '';
		width: 204px;
		height: 206px;

		background-image: ${props => props.isWin ? `` : `url("./images/gameCellActive.png")`};
		background-repeat: no-repeat;
		background-size: contain;
		transition: .1s ease;
	}

	${props => props.isActive && css`
		cursor: url("./images/cursorPointer.png"), pointer;
		&::after {
			transition: 1s linear;
			opacity: 1;
			animation: ${Animation.rotate} 2.5s infinite ease-in-out;
		}
		&:hover {
			&::before {
				transition: .8s ease;
				transform: scale(1.02);
			}
			& > p {
				transition: .8s ease;
				transform: scale(1.07);
			}
		}
	`};
`;

export const Number = styled.p<{ num : number, isActive : boolean }>`
	position: relative;
	margin: 0;
	padding: 0;
	z-index: 1;

	width: 40px;
	height: 48px;
	transition: .8s ease;

	background-image: ${(props) => {
		switch (props.num) {
			case 1:
				return `url("./images/one.png")`;
			case 2:
				return `url("./images/two.png")`;
			case 3:
				return `url("./images/three.png")`;
			case 4:
				return `url("./images/four.png")`;
			case 5:
				return `url("./images/five.png")`;
			case 6:
				return `url("./images/six.png")`;
			case 7:
				return `url("./images/seven.png")`;
			case 8:
				return `url("./images/eight.png")`;
			case 9:
				return `url("./images/nine.png")`;
			default:
				return '';
		}
	}};
	background-repeat: no-repeat;
	background-size: contain;

	animation: ${Animation.appear} .1s linear 1;
	${props => props.isActive && css`
	
	`}

`;
