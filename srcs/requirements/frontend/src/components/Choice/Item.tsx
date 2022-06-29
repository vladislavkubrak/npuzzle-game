import React from 'react';
import * as Styled from './styled';
import { IItem } from './types';
import { handleClickSound, handleHoverSound } from '../config/SFX';

export const Item = ({ type, handleClick } : IItem) => {
	if (type === 'game') {
		return (
			<Styled.Game>
				<Styled.GameBtn onMouseEnter={() => handleHoverSound(2)} onClick={() => {
					handleClick('game');
					handleClickSound();
				}} 
				/>
			</Styled.Game>
		)
	}
	return (
		<Styled.Solver>
			<Styled.SolverBtn onMouseEnter={() => handleHoverSound(2)} onClick={() => {
				handleClick('solver');
				handleClickSound();
			}}
			/>
		</Styled.Solver>
	)
}
