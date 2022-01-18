import React from 'react';

import './Sudoku.css';
import SudokuSquare from './SudokuSquare';

import {getSudoku} from './SudokuUtils';


export default function Sudoku () {
	let [currentIndex, setCurrectIndex] = React.useState(0);
	let [squareValues, setSquareValues] = React.useState(new Array(9 * 9).fill({
		value: 0,
		frozen: false
	}));

	function setSquareValue (index, value) {
		if (index < 0 || index > 80) return;
		if (value < 1 || value > 9) return;
		let arr = [...squareValues];
		arr[index] = {
			value: value,
			frozen: false
		};
		setSquareValues(arr);
		setCurrectIndex(index);
	}

	const nines = new Array(9).fill(0);
	let rowItems = nines.map((v1, k1) => {
		return (
			<div className="SudokuRow" key={k1}>
				{
					nines.map((v2, k2) => {
						let index = k1*9 + k2;
						let square = squareValues[index];
						return <SudokuSquare key={index} index={index} square={square}
							setSquareValue={setSquareValue} />;
					})
				}
			</div>
		);
	});

	return (
		<div className="bg-slate-200 min-h-screen p-4">
			<div className="max-w-lg m-auto p-2 gap-1 text-center border-2 border-slate-900">
				{rowItems}
			</div>
		</div>
	);
}

