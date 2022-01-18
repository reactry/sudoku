import React from 'react';

import './Sudoku.css';
import SudokuCell from './SudokuCell';

import SudokuXLabel from './SudokuXLabel';
import SudokuYLabel from './SudokuYLabel';

import {getSudoku} from './SudokuUtils';


export default function Sudoku () {
	let [currentIndex, setCurrectIndex] = React.useState(0);
	let [cellValues, setCellValues] = React.useState(new Array(9 * 9).fill({
		value: 0,
		frozen: false
	}));

	function setCellValue (index, value) {
		if (index < 0 || index > 80) return;
		if (value < 1 || value > 9) return;
		let arr = [...cellValues];
		arr[index] = {
			value: value,
			frozen: false
		};
		setCellValues(arr);
		setCurrectIndex(index);
	}

	const nines = new Array(9).fill(0);
	let rowItems = nines.map((v1, k1) => {
		return (
			<div className="SudokuRow" key={k1}>
				{
					nines.map((v2, k2) => {
						let index = k1*9 + k2;
						let cell = cellValues[index];
						return <SudokuCell key={index} index={index} cell={cell}
							setCellValue={setCellValue} />;
					})
				}
			</div>
		);
	});

	return (
		<div className="bg-slate-200 min-h-screen p-4 font-bold select-none">
			<div className="w-96 m-auto">
				<SudokuXLabel />
				<div className="relative">
					<SudokuYLabel classes="-left-14" />
					<div className="py-2 text-center text-white border-2 border-slate-900">
						{rowItems}
					</div>
					<SudokuYLabel classes="-right-14" />
				</div>
				<SudokuXLabel />
			</div>
		</div>
	);
}

