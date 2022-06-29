export const checkActive = (data : number[]) : boolean[] => {
	const result : boolean[] = new Array(9).fill(false);
	const zeroIndex = data.indexOf(0);

	if (zeroIndex === 0) {
		result[1] = true;
		result[3] = true;
	} else if (zeroIndex === 1) {
		result[0] = true;
		result[2] = true;
		result[4] = true;
	} else if (zeroIndex === 2) {
		result[1] = true;
		result[5] = true;
	} else if (zeroIndex === 3) {
		result[0] = true;
		result[4] = true;
		result[6] = true;
	} else if (zeroIndex === 4) {
		result[1] = true;
		result[3] = true;
		result[5] = true;
		result[7] = true;
	} else if (zeroIndex === 5) {
		result[2] = true;
		result[4] = true;
		result[8] = true;
	} else if (zeroIndex === 6) {
		result[3] = true;
		result[7] = true;
	} else if (zeroIndex === 7) {
		result[4] = true;
		result[6] = true;
		result[8] = true;
	} else if (zeroIndex === 8) {
		result[5] = true;
		result[7] = true;
	}

	return result;
}

export const checkWin = (data : number[]) => {
	return data.toString() === `1,2,3,8,0,4,7,6,5`;
}


export const puzzles = [
    [
      7, 5, 0, 1, 3,
      4, 8, 6, 2
    ],
    [
      7, 0, 5, 1, 3,
      4, 8, 6, 2
    ],
    [
      7, 3, 5, 1, 0,
      4, 8, 6, 2
    ],
    [
      7, 3, 5, 1, 4,
      0, 8, 6, 2
    ],
    [
      7, 3, 0, 1, 4,
      5, 8, 6, 2
    ],
    [
      7, 0, 3, 1, 4,
      5, 8, 6, 2
    ],
    [
      0, 7, 3, 1, 4,
      5, 8, 6, 2
    ],
    [
      1, 7, 3, 0, 4,
      5, 8, 6, 2
    ],
    [
      1, 7, 3, 8, 4,
      5, 0, 6, 2
    ],
    [
      1, 7, 3, 8, 4,
      5, 6, 0, 2
    ],
    [
      1, 7, 3, 8, 4,
      5, 6, 2, 0
    ],
    [
      1, 7, 3, 8, 4,
      0, 6, 2, 5
    ],
    [
      1, 7, 3, 8, 0,
      4, 6, 2, 5
    ],
    [
      1, 0, 3, 8, 7,
      4, 6, 2, 5
    ],
    [
      0, 1, 3, 8, 7,
      4, 6, 2, 5
    ],
    [
      8, 1, 3, 0, 7,
      4, 6, 2, 5
    ],
    [
      8, 1, 3, 7, 0,
      4, 6, 2, 5
    ],
    [
      8, 1, 3, 7, 2,
      4, 6, 0, 5
    ],
    [
      8, 1, 3, 7, 2,
      4, 0, 6, 5
    ],
    [
      8, 1, 3, 0, 2,
      4, 7, 6, 5
    ],
    [
      0, 1, 3, 8, 2,
      4, 7, 6, 5
    ],
    [
      1, 0, 3, 8, 2,
      4, 7, 6, 5
    ],
    [
      1, 2, 3, 8, 0,
      4, 7, 6, 5
    ]
  ];

export const activeCells = [
    [
      false, true,  false,
      false, false, true,
      false, false, false
    ],
    [
      true,  false, true,
      false, true,  false,
      false, false, false
    ],
    [
      false, true,  false,
      true,  false, true,
      false, true,  false
    ],
    [
      false, false, true,
      false, true,  false,
      false, false, true
    ],
    [
      false, true,  false,
      false, false, true,
      false, false, false
    ],
    [
      true,  false, true,
      false, true,  false,
      false, false, false
    ],
    [
      false, true,  false,
      true,  false, false,
      false, false, false
    ],
    [
      true,  false, false,
      false, true,  false,
      true,  false, false
    ],
    [
      false, false, false,
      true,  false, false,
      false, true,  false
    ],
    [
      false, false, false,
      false, true,  false,
      true,  false, true
    ],
    [
      false, false, false,
      false, false, true,
      false, true,  false
    ],
    [
      false, false, true,
      false, true,  false,
      false, false, true
    ],
    [
      false, true,  false,
      true,  false, true,
      false, true,  false
    ],
    [
      true,  false, true,
      false, true,  false,
      false, false, false
    ],
    [
      false, true,  false,
      true,  false, false,
      false, false, false
    ],
    [
      true,  false, false,
      false, true,  false,
      true,  false, false
    ],
    [
      false, true,  false,
      true,  false, true,
      false, true,  false
    ],
    [
      false, false, false,
      false, true,  false,
      true,  false, true
    ],
    [
      false, false, false,
      true,  false, false,
      false, true,  false
    ],
    [
      true,  false, false,
      false, true,  false,
      true,  false, false
    ],
    [
      false, true,  false,
      true,  false, false,
      false, false, false
    ],
    [
      true,  false, true,
      false, true,  false,
      false, false, false
    ],
    [
      false, true,  false,
      true,  false, true,
      false, true,  false
    ]
  ];