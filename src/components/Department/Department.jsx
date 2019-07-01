import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Department extends Component {
	render() {
		const { name, icon, description, id } = this.props.department;
		return (
			<LinkContainer to={`/departments/${id}`}>
				<Col sm={6} xl={4} className="department d-none d-sm-block py-1 py-sm-2 px-2 text-center">
					<i className={"icon mr-3 " + icon} />
					<h3>{name}</h3>
					<p>{description}</p>
				</Col>
			</LinkContainer>
		);
	}
}
