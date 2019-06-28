import React, { Component } from "react";
import { Media } from "react-bootstrap";

export default class Service extends Component {
	render() {
		const { name, icon, description } = this.props.service;
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
}
