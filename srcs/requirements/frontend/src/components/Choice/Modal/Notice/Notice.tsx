import React from 'react';
import { ButtonNext } from '../styled';
import { INotice } from './types';
import * as Styled from './styled';
import { handleClickSound, handleHoverSound } from '../../../config/SFX';

export const Notice = ({ mode, handleBgSound } : INotice) => {
	return (
		<Styled.Notice>
			<Styled.Title>The {mode === 'game' ? 'game' : 'solver'} 3x3 will wait for you.<br />Are you ready?</Styled.Title>
				<ButtonNext to={'/game'} onMouseEnter={() => handleHoverSound(1)} onFocus={() => {
					handleClickSound();
					handleBgSound();
				}} />
		</Styled.Notice>
	);
}
