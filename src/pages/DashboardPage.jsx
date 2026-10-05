import FilterChip from "../components/FilterChip";
import StatCard from "../components/StatCard";
import "./DashboardPage.css";

function DashboardPage() {
	return (
		<main className="dashboard-page">
			<div className="statRow">
				<StatCard statNumber={6} statName={"Total"} />
				<StatCard statNumber={2} statName={"Interviews"} />
				<StatCard statNumber={1} statName={"Offers"} />
			</div>
			<div className="filters-carousel">
				<FilterChip filterName={"All"} filterNumber={"6"} />
				<FilterChip filterName={"Offer"} filterNumber={"1"} />
				<FilterChip filterName={"Interview"} filterNumber={"2"} />
				<FilterChip filterName={"Applied"} filterNumber={"20"} />
				<FilterChip filterName={"Offer"} filterNumber={"1"} />
				<FilterChip filterName={"Interview"} filterNumber={"2"} />
			</div>
		</main>
	);
}

export default DashboardPage;
