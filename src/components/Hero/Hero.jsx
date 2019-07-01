import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Hero extends Component {
	render() {
		const {
			id = "hero",
			subheading = "Mediplus",
			title = "Mediplus Medical Clinic",
			description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sequi eveniet fugiat nemo dicta aut nihil alias tempore nostrum omnis tenetur, dignissimos deserunt sunt quae sit ipsam consequuntur, soluta illum!",
			hideAppointmentButton = false,
			backgroundImage = require("images/bg_3.jpg")
		} = this.props;

		const button = hideAppointmentButton ? null : (
			<LinkContainer to="/appointment">
				<Button variant="primary">Make an appointment</Button>
			</LinkContainer>
		);

		return (
			<section id={id} className="hero-section" style={{backgroundImage: `url(${backgroundImage})`}}>
				<Container>
					<Row className="py-3 py-md-5">
						<Col md={6}>
							<p className="subheading">{subheading}</p>
							<h1 className="mb-2">{title}</h1>
							<p className="mb-2">{description}</p>
							{button}
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}
