import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { NavBar } from './NavBar/NavBar';
import { GameScreen } from './GameScreen/GameScreen';
import { ModalFinish } from './ModalFinish/ModalFinish';
import { IGame } from './types';
import useSound from 'use-sound';
const pads = require('../../sounds/pad.mp3');
const solves = require('../../sounds/solver.mp3');

export const Game = ({ mode, handleMode, heuristic, isGreedy, isUniform } : IGame) => {
	const [isWin, setIsWin] = useState(false);
	const [winTime, setWinTime] = useState('');
	const [isSound, setIsSound] = useState(true);
	const [isSoundBg, setIsSoundBg] = useState(true);

	const [play, { stop }] = useSound(mode === 'game' ? pads : solves, {volume: 0.4, interrupt: true});
	useEffect(() => {
		if (isSound && isSoundBg && !isWin) {
			play();
		} else {
			stop();
		}
	});

	const handleWin = () => {
		setIsWin(true);
	}

	const handleWinTime = (time: string) => {
		setWinTime(time);
	}

	const handleSound = () => {
		setIsSound(prev => !prev);
	}


	return (
		<Styled.Wrapper>
				<NavBar mode={mode} isWin={isWin} handleWinTime={handleWinTime} handleMode={handleMode} handleSound={handleSound} isSound={isSound} handleStop={stop} />
			<Styled.Box>
				<GameScreen mode={mode} handleWin={handleWin} isWin={isWin} isSound={isSound} heuristic={heuristic} isGreedy={isGreedy} isUniform={isUniform} />
				{isWin && <ModalFinish mode={mode} winTime={winTime} isSound={isSound} handleOffSound={handleSound}/>}
			</Styled.Box>
		</Styled.Wrapper>
	)
}
