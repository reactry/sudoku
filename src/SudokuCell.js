

function getSquareIndex (index) {
	let x_index = Math.floor((index % 9) / 3);
	let y_index = Math.floor(index / 9 / 3);
	return ((y_index * 3) + x_index);
}

const backgrounds = [
	"bg-red-400 hover:bg-red-600 active:bg-red-800",
	"bg-blue-400 hover:bg-blue-600 active:bg-blue-800",
	"bg-green-400 hover:bg-green-600 active:bg-green-800",
	"bg-purple-400 hover:bg-purple-600 active:bg-purple-800",
	"bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-800",
	"bg-fuchsia-400 hover:bg-fuchsia-600 active:bg-fuchsia-800",
	"bg-orange-400 hover:bg-orange-600 active:bg-orange-800",
	"bg-lime-400 hover:bg-lime-600 active:bg-lime-800",
	"bg-rose-400 hover:bg-rose-600 active:bg-rose-800",
];

function getSquareBgClass (index) {
	return backgrounds[getSquareIndex(index)];
}


export default function SudokuCell ({
	cell, index,
	setCellValue
}) {

	function handleClick (e) {
		let newValue = (cell.value === 9) ? 1 : (cell.value + 1);
		setCellValue(index, newValue);
	}

	let cell_classname = "SudokuCell w-1/12 p-2 m-1 rounded-full h-10 inline-block align-top " + getSquareBgClass(index);
	return (
		<div className={cell_classname} onClick={handleClick} tabIndex="0">
			{cell.value === 0 ? "" : cell.value}
		</div>
	);
}

