

export default function SudokuYLabel ({
	classes
}) {
	const nines = new Array(9).fill(0);
	let items = nines.map((v, i) =>
		<div className="SudokuYLabelCell rounded p-2 m-1 h-10 bg-yellow-400" key={i}></div>
	);

	let classNames = "SudokuYLabel w-12 m-auto py-2 inline-block absolute top-0 border-2 " + classes;
	return (
		<div className={classNames}>
			{items}
		</div>
	);
}

