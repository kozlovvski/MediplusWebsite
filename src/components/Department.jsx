import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Department(props) {
	const { name, icon, description, id } = props.department;
	return (
		<LinkContainer to={`/departments/${id}`}>
			<Col
				sm={6}
				xl={4}
				className="department d-none d-sm-block py-1 py-sm-2 px-2 text-center"
			>
				<i className={"icon mr-3 " + icon} />
				<h3>{name}</h3>
				<p>{description}</p>
			</Col>
		</LinkContainer>
	);
}

Department.propTypes = {
	department: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
};

export default Department;
