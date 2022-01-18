

export default function SudokuXLabel () {
	const nines = new Array(9).fill(0);
	let items = nines.map((v, i) =>
		<div className="SudokuXLabelCell w-1/12 p-2 m-1 rounded h-10 inline-block align-top bg-red-400" key={i}></div>
	);

	return (
		<div className="SudokuXLabel m-auto p-2 gap-1 text-center">
			{items}
		</div>
	);
}

