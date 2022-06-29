import React, { useState } from 'react';
import * as Styled from './styled';
import { Item } from './Item';
import { Modal } from './Modal/Modal';
import { IChoice } from './types';

export const Choice = ({ handleMode, mode, handleBgSound, handleOptionsSolver }: IChoice) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (type: string) => {
		setShowModal((prev) => !prev);
		handleMode(type);
	}

	return (
		<Styled.Wrapper>
			<Styled.Title>
				<img src="./images/choiceText.png" alt="Puzzle logo" width={337} height={85} />
			</Styled.Title>
			<Styled.Content>
				<Styled.Options>
					<Item type='game' handleClick={handleClick}/>
					<Item type='solver'  handleClick={handleClick}/>
				</Styled.Options>
			</Styled.Content>
			{showModal && <Modal mode={mode} handleCloseClick={handleClick} handleBgSound={handleBgSound} handleOptionsSolver={handleOptionsSolver} />}
		</Styled.Wrapper>
	)
}
