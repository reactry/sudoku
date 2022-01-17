

export default function SudokuSquare ({
	value, index,
	setSquareValue
}) {

	function handleClick (e) {
		let newValue = (value === 9) ? 1 : (value + 1);
		setSquareValue(index, newValue);
	}

	return (
		<div className="SudokuSquare w-1/12 p-2 m-1 bg-slate-400 rounded h-10 inline-block align-top" onClick={handleClick}>
			{value === 0 ? "" : value}
		</div>
	);
}

