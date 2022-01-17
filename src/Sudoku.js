import React from 'react';

import SudokuSquare from './SudokuSquare';


export default function Sudoku () {
	let [squareValues, setSquareValues] = React.useState(new Array(81).fill(0));

	function setSquareValue (index, value) {
		if (index < 0 || index > 80) return;
		if (value < 1 || value > 9) return;
		let arr = [...squareValues];
		arr[index] = value;
		setSquareValues(arr);
	}

	const squareItems = squareValues.map((value, index) =>
		<SudokuSquare
			key={index} value={value} index={index}
			setSquareValue={setSquareValue}
		/>
	);

	return (
		<div className="bg-slate-200 min-h-screen">
			<div className="grid grid-cols-9 max-w-lg m-auto p-4 gap-1 text-center">
				{squareItems}
			</div>
		</div>
	);
}

