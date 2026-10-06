import "./ApplicationCard.css"

function ApplicationCard({
	applicationCompany,
	applicationPosition,
	applicationLocation,
	applicationDate}) {
	return (
		<div className="card application-card">
			<div className="application-card-top">
				<div>
					<h3 className="application-card-company">{applicationCompany}</h3>
					<p className="application-card-position">{applicationPosition}</p>
				</div>
        <div className="stat">Applied</div>
				{/* <StatusBadge /> */}
			</div>
			<div className="application-card-bottom">
				<span>{applicationLocation}</span>
				<span>{applicationDate}</span>
			</div>
		</div>
	);
}

export default ApplicationCard