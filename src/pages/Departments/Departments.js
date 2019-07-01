import React, { Component } from "react";
import Hero from "components/Hero/Hero";
import WebsiteData from "data.json";

export default class Department extends Component {
	render() {
		const id = this.props.match.params.id;
		console.log(id)
		const departmentData = WebsiteData.departments.find(department => department.id == id);

		return (
			<React.Fragment>
				<Hero
					subheading="Departments"
					title={departmentData.name}
					description={departmentData.description}
					backgroundImage={require("images/bg_3.jpg")}
					hideAppointmentButton
				/>
			</React.Fragment>
		);
	}
}
