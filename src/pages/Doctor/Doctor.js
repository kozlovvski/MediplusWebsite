import React, { Component } from "react";
import WebsiteData from "data.json";
import Hero from "components/Hero/Hero";

export default class Doctor extends Component {
	render() {
		const id = this.props.match.params.id;
		const doctorData = WebsiteData.doctors.find(doctor => doctor.id == id);

		return (
			<React.Fragment>
				<Hero
					subheading={doctorData.spec}
					title={doctorData.name}
					description={doctorData.description}
					backgroundImage={require("images/bg_1.jpg")}
					hideAppointmentButton
				/>
			</React.Fragment>
		);
	}
}
