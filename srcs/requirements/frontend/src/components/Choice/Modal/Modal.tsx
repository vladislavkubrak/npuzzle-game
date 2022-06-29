import React, { useState } from 'react';
import * as Styled from './styled';
import { Notice } from './Notice/Notice';
import { Heuristic } from './Heuristic/Heuristic';
import { IModal } from './types';

export const Modal = ({ mode, handleCloseClick, handleBgSound, handleOptionsSolver } : IModal) => {
	const [showSecondStep, setShowSecondStep] = useState(0);

	const handleShowStep = (step : number) => {
		setShowSecondStep(step);
	}

	const handleClose = (type: string) => {
		handleCloseClick(type);
		setShowSecondStep(0);
	}

	if (mode === 'game') {
		return <Styled.Modal isGenerate={false}><Notice mode={mode} handleBgSound={handleBgSound}/></Styled.Modal>
	}

	return (
		<Styled.Modal isGenerate={true}>
			{showSecondStep === 0 ?  <Heuristic handleShowStep={handleShowStep} handleClose={handleClose} handleOptionsSolver={handleOptionsSolver} /> : <Notice mode={mode}  handleBgSound={handleBgSound} />}
		</Styled.Modal>
	);
}
