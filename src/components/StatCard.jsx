import "./StatCard.css";

function StatCard({statNumber, statName}) {
	return (
		<div className="stat-card">
			<div className="stat-number">{statNumber}</div>
			<div className="stat-name">{statName}</div>
		</div>
	);
}

export default StatCard;
