import React from 'react';
import * as Styled from './styled';
import { IStartButton } from './types';

export const StartButton = ({ handleClickSound, handleHoverSound } : IStartButton) => {
	return (
		<Styled.Button to={'/choice'} onFocus={handleClickSound} onMouseEnter={() => handleHoverSound(1)}>
			<Styled.ButtonFront />
		</Styled.Button>
	)
}
