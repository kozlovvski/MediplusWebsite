import React from "react";
import PropTypes from "prop-types";
import { Col, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Doctor(props) {
	const { id, name, spec, description } = props.doctor;
	const docImage = require(`images/doc-${id}.jpg`);

	return (
		<Col sm={6} md={3} className="doctor text-center my-2">
			<Image fluid src={docImage} className="mb-2" />
			<h3 className="mb-0">{name}</h3>
			<p className="subheading">{spec}</p>
			<p>{description}</p>
			<LinkContainer to={`/doctors/${id}`}>
				<Button variant="primary">Book visit</Button>
			</LinkContainer>
		</Col>
	);
}

Doctor.propTypes = {
	doctor: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		spec: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
};

export default Doctor;
