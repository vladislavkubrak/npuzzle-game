import React, { useEffect, useState } from 'react';
import * as Styled from '../styled';
import { checkActive, checkWin } from '../utils';
import { IItemGame } from '../types';
import { handleGameClickSound } from '../../../config/SFX';
import { getSnail } from '../../../../../../algo/src/utils';

export const Play = ({ handleWin, isWin, isSound, handleHelper } : IItemGame) => {
	const data = getSnail();

	useEffect(() => {
		if (handleHelper ) {
			handleHelper(data);
		}
	}, []);

	const [gameData, setGameData] = useState([...data]);
	const [activeData, setActiveData] = useState(checkActive(gameData));
	
	const handleMove  = (index : number) => {
		if (activeData[index]) {
			const dataPrev = [...gameData];
			const zeroIndex = dataPrev.indexOf(0);
			const tmp = dataPrev[index];
			dataPrev[index] = dataPrev[zeroIndex];
			dataPrev[zeroIndex] = tmp;
			setGameData(dataPrev);
			if (handleHelper) {
				handleHelper(dataPrev);
			}
			setActiveData(checkActive(dataPrev));
			if (checkWin(dataPrev)) {
				handleWin();
			}
		}
	}

	return (
		<Styled.GameScreen isWin={isWin}>
			<Styled.List>
				{gameData.map((el, i) => {
					return (
						<Styled.Item num={el} onClick={() => {
							handleMove(i);
							if (activeData[i] && isSound) {
								handleGameClickSound();
							}
						}} key={`item_${i}`} isActive={activeData[i]} isWin={isWin}>
							<Styled.Number num={el} isActive={activeData[i]}/>
						</Styled.Item>
					);
				})}
			</Styled.List>
		</Styled.GameScreen>
	)
}
