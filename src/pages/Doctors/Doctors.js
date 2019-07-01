import React, { Component } from "react";
import WebsiteData from "data.json";
import Hero from "components/Hero/Hero";

export default class Doctor extends Component {
	render() {
		const id = this.props.match.params.id;
		const doctorData = WebsiteData.doctors.find(doctor => doctor.id == id);

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
			</React.Fragment>
		);
	}
}
