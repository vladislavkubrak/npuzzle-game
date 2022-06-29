import React, { useState } from 'react';
import * as Styled from './styled';
import { ButtonNext } from '../styled';
import { IHeuristic } from './types';
import { handleClickSolveSound, handleClickSolveSound2, handleHoverSound, handleClickSound, handleClickClose } from '../../../config/SFX';

export const Heuristic = ({ handleShowStep, handleClose, handleOptionsSolver } : IHeuristic) => {
	const [heuristic, setHeuristic] = useState(0);
	const [isGreedy, setIsGreedy] = useState(false);
	const [isUniform, setIsUniform] = useState(false);
	const heuristics = ['Manhattan', 'Euclidean', 'OOP'];

	const handleActiveHeuristic = (id : number) => {
		setHeuristic(id);
	}

	return (
		<Styled.Heuristic>
			<Styled.CloseButton onClick={() => {
				handleClose('');
				handleClickClose();
			}} />
			<Styled.Title>Choice the option</Styled.Title>
			<Styled.HeuOptions>
				{heuristics.map((el, i) => {
					return (<Styled.HeuItem key={i} active={heuristic === i} onClick={() => {
						handleActiveHeuristic(i);
						handleClickSolveSound();
					}}>{el}</Styled.HeuItem>)
				})}
			</Styled.HeuOptions>
			<Styled.Adds>
				<Styled.AddsItem onClick={() => {
					handleClickSolveSound2();
					setIsUniform((prev) => !prev);
				}}>
					<Styled.Input type="checkbox" value="uniform" id="uniform" name="additional" />
					<Styled.Label htmlFor="uniform">Uniform</Styled.Label>
				</Styled.AddsItem>
				<Styled.AddsItem onClick={() => {
					handleClickSolveSound2();
					setIsGreedy((prev) => !prev);
				}}>
				<Styled.Input type="checkbox" value="greedy" id="greedy" name="additional" />
					<Styled.Label htmlFor="greedy">Greedy</Styled.Label>
				</Styled.AddsItem>
			</Styled.Adds>
			<div onMouseEnter={() => handleHoverSound(1)} onClick={() => {
				handleShowStep(1);
				handleClickSound();
				console.log('heuris: ', heuristics[heuristic]);
				handleOptionsSolver(heuristics[heuristic], isGreedy, isUniform);
			}} className="choiceNextBtn" />
		</Styled.Heuristic>
	);
}
