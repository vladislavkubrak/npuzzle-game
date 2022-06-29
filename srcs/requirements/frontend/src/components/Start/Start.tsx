import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { StartButton } from './StartButton';
import { handleClickSound, handleHoverSound } from '../config/SFX';


export const Start = () => {

	return (
		<Styled.Wrapper>
			<Styled.Content>
				<Styled.Title />
				<Styled.Image />
			</Styled.Content>
			<StartButton handleClickSound={handleClickSound} handleHoverSound={handleHoverSound} />
		</Styled.Wrapper>
	);
}
