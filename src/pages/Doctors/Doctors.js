import React from "react";

import WebsiteData from "data.json";
import Hero from "components/Hero/Hero";

export default function Doctors(props) {
	const id = props.match.params.id;
	const doctorData = WebsiteData.doctors.find(
		doctor => doctor.id.toString() === id
	);

	document.title = doctorData.name + " || Mediplus";

	return (
		<React.Fragment>
			<Hero
				subheading="Doctor"
				title={doctorData.name}
				description={doctorData.description}
				backgroundImage={require("images/bg_2.jpg")}
				hideAppointmentButton
			/>
			<h2>Add something here...</h2>
		</React.Fragment>
	);
}
