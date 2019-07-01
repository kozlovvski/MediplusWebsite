import React from "react";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";

function Service(props) {
	const { name, icon, description } = props.service;
	return (
		<Media className="col-md-6 col-lg-12 col-xl-6 mb-1 col-auto">
			<i className={"service-icon mr-3 " + icon} />
			<Media.Body>
				<h3>{name}</h3>
				<p>{description}</p>
			</Media.Body>
		</Media>
	);
}

Service.propTypes = {
	service: PropTypes.shape({
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
};

export default Service;
