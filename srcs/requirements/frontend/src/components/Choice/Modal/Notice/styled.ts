import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ModalBase } from '../styled';

export const Notice = styled(ModalBase)`
	width: 540px;
	height: 493px;
	padding-top: 94px;
	padding-left: 72px;
	padding-right: 72px;

	& > .choiceNextBtn {
		margin-left: -18px;
	}
`;

export const Title = styled.p`
	user-select: none;
	margin: 0;
	padding: 0;
	margin-bottom: 38px;
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 900;
	font-size: 42px;
	line-height: 53px;
	text-align: center;

	color: #fff;
`;