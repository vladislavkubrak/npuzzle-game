import React, { useEffect, useState, useMemo } from 'react';
import * as Styled from '../styled';
import { IItemGame } from '../types';
import { solveData, solveCurrentPuzzle } from '../../../../../../algo/src/index';

export const Solver = ({ handleWin, isWin, isSound, heuristic, isGreedy, isUniform, isHelper } : IItemGame) => {
	const { puzzles, moves, timeComplexity, spaceComplexity, activeCells} = useMemo(
		() => isHelper && !isHelper.length ? solveData(heuristic || 'Manhattan', isGreedy || false, isUniform || false) : solveCurrentPuzzle(isHelper || []), []
	);

	console.log('---Information---');
	console.log('moves: ', moves)
	console.log('timeComplexity: ', timeComplexity)
	console.log('spaceComplexity: ', spaceComplexity)
	console.log('----------------')

	const size = puzzles.length;
	let i = 0;
	const [gameDataArr, setGameDataArr] = useState([...puzzles[i]]);
	const [activeDataArr, setActiveDataArr] = useState([...activeCells[i]]);
	

	useEffect(() => {
		const interval = setInterval(() => {
			if (i + 1 < size) {
				i++;
				setGameDataArr([...puzzles[i]]);
				setActiveDataArr([...activeCells[i]]);
			} else {
				handleWin();
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);


	return (
		<Styled.GameScreen isWin={isWin}>
			<Styled.List>
				{gameDataArr.map((el, i) => {
					return (
						<Styled.Item num={el} key={`item_${i}`} isActive={activeDataArr[i]} isWin={isWin}>
							<Styled.Number num={el} isActive={activeDataArr[i]}/>
						</Styled.Item>
					);
				})}
			</Styled.List>
		</Styled.GameScreen>
	);
}
