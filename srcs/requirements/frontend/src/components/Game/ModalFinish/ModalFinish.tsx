import React, { createRef, useEffect, useRef } from 'react';
import * as Styled from './styled';
import { IModalFinish } from './types';
import { WinTimer } from '../NavBar/styled';
import { handleWinSound } from '../../config/SFX';

export const ModalFinish = ({ mode, winTime, isSound, handleOffSound } : IModalFinish) => {
	const refL = useRef<any>();

	useEffect(() => {
		if (refL.current) {
			refL.current.focus();
		}
	})

	return (
		<Styled.ModalFinish>
			<WinTimer isWin={true}>{winTime}</WinTimer>
			<Styled.ModalWin>
				<Styled.LightLeft />
				<Styled.Light />
				<Styled.LightRight />
				<Styled.Cup />
				<Styled.Text mode={mode}/>
				<Styled.Button ref={refL} onFocus={() => {
					handleOffSound();
					handleWinSound();
				}} to="/choice"/>
			</Styled.ModalWin>
		</Styled.ModalFinish>
	)
}
