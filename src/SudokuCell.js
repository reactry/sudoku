

export default function SudokuCell ({
	cell, index,
	setCellValue
}) {

	function handleClick (e) {
		let newValue = (cell.value === 9) ? 1 : (cell.value + 1);
		setCellValue(index, newValue);
	}

	return (
		<div className="SudokuCell w-1/12 p-2 m-1 bg-slate-400 rounded h-10 inline-block align-top" onClick={handleClick}>
			{cell.value === 0 ? "" : cell.value}
		</div>
	);
}

