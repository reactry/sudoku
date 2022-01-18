

export default function SudokuSquare ({
	square, index,
	setSquareValue
}) {

	function handleClick (e) {
		let newValue = (square.value === 9) ? 1 : (square.value + 1);
		setSquareValue(index, newValue);
	}

	return (
		<div className="SudokuSquare w-1/12 p-2 m-1 bg-slate-400 rounded h-10 inline-block align-top" onClick={handleClick}>
			{square.value === 0 ? "" : square.value}
		</div>
	);
}

