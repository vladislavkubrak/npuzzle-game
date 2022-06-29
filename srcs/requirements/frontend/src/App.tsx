import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Start } from './components/Start/Start';
import { Choice } from './components/Choice/Choice';
import { Game } from './components/Game/Game'
import { Color } from './components/config/Color';
import { World } from './components/config/World';
import { Fonts } from './components/config/Fonts';
import useSound from 'use-sound';
const background = require('./sounds/bgMain.mp3');

const App = () => {
	const [mode, setMode] = useState('game');
	const [heuristic, setHeuristic] = useState('Manhattan');
	const [isGreedy, setIsGreedy] = useState(false);
	const [isUniform, setIsUniform] = useState(false);
	const [isSoundBg, setIsSoundBg] = useState(true);
	const [play, { stop }] = useSound(background, {volume: 0.1, interrupt: true});
	
	const handleMode = (mode : string) => {
		setMode(mode);
	}

	const handleBgSound = () => {
		setIsSoundBg(prev => !prev);
	}

	const handleOptionsSolver = (type : string, isGreedy : boolean, isUniform : boolean) => {
		setHeuristic(type);
		setIsGreedy(isGreedy);
		setIsUniform(isUniform);
	}
	
	useEffect(() => {
		if (isSoundBg) {
			play();
		} else {
			stop();
		}
	});

	return (
		<>
			<Color />
			<World />
			<Fonts />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="choice" element={<Choice handleMode={handleMode} mode={mode} handleBgSound={handleBgSound} handleOptionsSolver={handleOptionsSolver}/>} />
					<Route path="game" element={<Game mode={mode} handleMode={handleMode} heuristic={heuristic} isGreedy={isGreedy} isUniform={isUniform} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
