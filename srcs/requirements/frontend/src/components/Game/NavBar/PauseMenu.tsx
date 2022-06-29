import React from 'react';
import { handleClickSound, handleHoverSound } from '../../config/SFX';
import * as Styled from './styled';
import { IPauseMenu } from './types';

export const PauseMenu = ({ handlePause, handleMode, isSound, handleStop } : IPauseMenu) => {
  return (
	<Styled.PauseBox>
		<Styled.PauseMenu>
			<Styled.PauseMenuButton onClick={() => {
				handlePause();
				if (isSound) {
					handleClickSound();
				}
			}}/>

			<Styled.Resume onMouseEnter={() => {
				if (isSound) {
					handleHoverSound(1);
				}
			}} onClick={() => {
				handlePause();
				if (isSound) {
					handleClickSound();
				}
			}}/>
			<Styled.Giveup onMouseEnter={() => {
				if (isSound) {
					handleHoverSound(1);
				}
			}} onClick={() => {
				handleStop();
				handleMode('solver');
				handlePause();
				if (isSound) {
					handleClickSound();
				}
			}}/>
			<Styled.Exit onClick={() => handleStop()} onMouseEnter={() => {
				if (isSound) {
					handleHoverSound(1);
				}
			}} to="/" />
		</Styled.PauseMenu>
	</Styled.PauseBox>
  )
}
