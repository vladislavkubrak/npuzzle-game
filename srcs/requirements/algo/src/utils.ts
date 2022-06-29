const getRandomInt = (max : number) => {
	return Math.floor(Math.random() * max);
}

export const isSolvable = (puzzle : any, length : number) => {
	let puzzleInversions = 0;
	let snailInversions = length;
	
	for (let i = 0; i < puzzle.length; i++) {
		for (let j = i + 1; j < puzzle.length; j++) {
			if (puzzle[i] === 0) continue;
			else if (puzzle[i] > puzzle[j] && puzzle[j] !== 0) puzzleInversions++;
		}
	}

	return (puzzleInversions % 2 + snailInversions % 2) % 2 == 0;
}
  
export const getRandomSnail = () => {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 0];
	const result = [];
	
	while (result.length !== 9) {
		result.push(...nums.splice(getRandomInt(nums.length), 1));
	}

	return result;
}

export const getSnail = () => {
	let isSolution = false;
	let snail : any[] = [];
	while (!isSolution) {
		snail = getRandomSnail();
		if (isSolvable(snail, Math.sqrt(snail.length))) {
			isSolution = true;
		}
	}
	return snail;
}