import React, { Component } from "react";
import { Col, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Doctor extends Component {
	render() {
		const { id, name, spec, description } = this.props.doctor;
		const docImage = require(`images/doc-${id}.jpg`);
		return (
			<Col sm={6} md={3} className="doctor text-center my-2">
				<Image fluid src={docImage} className="mb-2" />
				<h3 className="mb-0">{name}</h3>
				<p className="subheading">{spec}</p>
				<p>{description}</p>
				<LinkContainer to={`/doctor/${id}`}>
					<Button variant="primary">Book visit</Button>
				</LinkContainer>
			</Col>
		);
	}
}
