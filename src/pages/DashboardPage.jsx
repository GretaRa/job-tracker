import StatCard from "../components/StatCard"
import "./DashboardPage.css"

function DashboardPage (){
  return (
		<main className="dashboard-page">
			<div className="statRow">
				<StatCard statNumber={6} statName={"Total"} />
				<StatCard statNumber={2} statName={"Interviews"} />
				<StatCard statNumber={1} statName={"Offers"} />
			</div>
		</main>
	);
}

export default DashboardPage