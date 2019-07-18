import React from "react";

import WebsiteData from "data.json";
import Hero from "components/Hero";
import MediplusInNumbers from "components/MediplusInNumbers";

export default function Departments(props) {
	const id = props.match.params.id;
	const departmentData = WebsiteData.departments.find(
		department => department.id.toString() === id
	);

	window.scrollTo(0, 0);
	document.title = departmentData.name + " || Mediplus";

	return (
		<React.Fragment>
			<Hero
				subheading="Departments"
				title={departmentData.name}
				description={departmentData.description}
				backgroundImage={require("images/bg_3.jpg")}
				hideAppointmentButton
			/>
			<h2>Add something here...</h2>
			<MediplusInNumbers />
		</React.Fragment>
	);
}