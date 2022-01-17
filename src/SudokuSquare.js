

export default function SudokuSquare ({
	value, index,
	setSquareValue
}) {

	function handleClick (e) {
		let newValue = (value === 9) ? 1 : (value + 1);
		setSquareValue(index, newValue);
	}

	return (
		<div className="py-2 bg-slate-400 rounded" onClick={handleClick}>
			{value === 0 ? "" : value}
		</div>
	);
}

