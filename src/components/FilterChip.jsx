import "./FilterChip.css";

function FilterChip({ filterName, filterNumber }) {
	return (
		<button className="filter-chip">
			{filterName} ({filterNumber})
		</button>
	);
}

export default FilterChip;
