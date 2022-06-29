import React, { useEffect, useState } from 'react';
import { IGameScreen } from './types';
import { Play } from './Play/Play';
import { Solver } from './Solver/Solver';
import * as Styled from './styled';

export const GameScreen = ({mode, handleWin, isWin, isSound, heuristic, isGreedy, isUniform } : IGameScreen) => {
	const [isHelper, setIsHelper] = useState<any[]>([]);

	const handleHelper = (puzzle : any[] = []) => {
		setIsHelper(puzzle);
	}

	if (mode === 'solver') {
		return <Solver handleWin={handleWin} isWin={isWin} isSound={isSound} heuristic={heuristic} isGreedy={isGreedy} isUniform={isUniform} isHelper={isHelper} />;
	}
	return <Play handleWin={handleWin} isWin={isWin} isSound={isSound} handleHelper={handleHelper} />;
}
