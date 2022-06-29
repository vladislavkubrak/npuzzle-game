import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { INavBar } from './types';
import { PauseMenu } from './PauseMenu';
import { handleClickPause } from '../../config/SFX';

export const NavBar = ({ mode, isWin, handleWinTime, handleMode, handleSound, isSound, handleStop } : INavBar) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [time, setTime] = useState('00.00');
	const [isPause, setIsPause] = useState(false);


	useEffect(() => {
		const interval = setInterval(() => {
			if (isWin) {
				handleWinTime(time);
			}
			if (!isPause) {
				setSeconds((prev) => prev + 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [isWin, isPause]);

	useEffect(() => {
		if (!isPause) {
			const secs = seconds;
			if (secs === 60) {
				if (minutes + 1 === 60) {
					setHours(hours + 1);
					setMinutes(0);
				} else {
					setMinutes(minutes + 1);
				}
				setSeconds(0);
			}
			if (hours) {
				setTime(
						(hours <= 9 ? '0' + hours : hours) 
						+ '.' 
						+ (minutes <= 9 ? '0' + minutes : minutes)
						+ '.'
						+ (seconds <= 9 ? '0' + seconds : seconds)
				);
			} else {
				setTime(
						(minutes <= 9 ? '0' + minutes : minutes)
						+ '.'
						+ (seconds <= 9 ? '0' + seconds : seconds)
				);
			}
		}
	}, [seconds, isPause]);

	const handlePause = () => {
		setIsPause((prev) => !prev);
	}
	
	return (
		<Styled.NavBar>
			<Styled.Logo isGame={mode === 'game'} />
			<Styled.Timer isWin={isWin}>{time}</Styled.Timer>
			<Styled.Settings>
				<Styled.Pause isWin={isWin} mode={mode} onClick={() => {
					handlePause();
					if (isSound) {
						handleClickPause();
					}
				}} />
				{isPause && <PauseMenu handlePause={handlePause} handleMode={handleMode} isSound={isSound} handleStop={handleStop} />}
				<Styled.Sound isWin={isWin} isActive={isSound} onClick={() => {
					handleSound();
				}} />
			</Styled.Settings>
		</Styled.NavBar>
	)
}
