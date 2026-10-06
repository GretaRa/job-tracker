import FilterChip from "../components/FilterChip";
import StatCard from "../components/StatCard";
import ApplicationCard from "../components/ApplicationCard";
import "./DashboardPage.css";

function DashboardPage() {
	return (
		<main className="dashboard-page">
			<section className="statRow" aria-label="Summary">
				<StatCard statNumber={6} statName={"Total"} />
				<StatCard statNumber={2} statName={"Interviews"} />
				<StatCard statNumber={1} statName={"Offers"} />
			</section>
			<section className="full-bleed filters-carousel">
				<ul>
					<li>
						<FilterChip filterName={"All"} filterNumber={"6"} />
					</li>
					<li>
						<FilterChip filterName={"Offer"} filterNumber={"1"} />
					</li>
					<li>
						<FilterChip filterName={"Interview"} filterNumber={"2"} />
					</li>
					<li>
						<FilterChip filterName={"Applied"} filterNumber={"20"} />
					</li>
					<li>
						<FilterChip filterName={"Offer"} filterNumber={"1"} />
					</li>
					<li>
						<FilterChip filterName={"Interview"} filterNumber={"2"} />
					</li>
				</ul>
			</section>
			<section aria-labelledby="applications-heading">
				<h2 id="applications-heading" className="sr-only">
					Applications
				</h2>
				<ul className="application-list">
					<li>
						<ApplicationCard
							applicationCompany={"Spotify"}
							applicationPosition={"Frontend Developer"}
							applicationLocation={"Stockholm, SE"}
							applicationDate={"Jan 24, 2026"}
						/>
					</li>
					<li>
						<ApplicationCard
							applicationCompany={"Spotify"}
							applicationPosition={"Frontend Developer"}
							applicationLocation={"Stockholm, SE"}
							applicationDate={"Jan 24, 2026"}
						/>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default DashboardPage;
