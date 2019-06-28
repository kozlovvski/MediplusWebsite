import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { genericHashLink } from "react-router-hash-link";

const HashLinkContainer = props => genericHashLink(props, LinkContainer);
const topMinusHeaderHeight = el => {
	const scrollY =
		el.offsetTop - document.getElementById("site-navbar").offsetHeight;
	window.scroll({ top: scrollY, behavior: "smooth" });
};

export default function Navigation() {
	return (
		<Navbar
			id="site-navbar"
			sticky="top"
			bg="light"
			collapseOnSelect
			expand="lg"
		>
			<Container>
				<Navbar.Brand className="font-weight-bold">Mediplus</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto" defaultActiveKey="/#Home">
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#Home">
							<Nav.Link>Home</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#About">
							<Nav.Link>About</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#Departments">
							<Nav.Link>Departments</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#Doctors">
							<Nav.Link>Doctors</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#Blog">
							<Nav.Link>Blog</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/#Contact">
							<Nav.Link>Contact</Nav.Link>
						</HashLinkContainer>
						<HashLinkContainer scroll={topMinusHeaderHeight} to="/appointment">
							<Nav.Link className="btn btn-secondary ml-lg-1">
								Appointment
							</Nav.Link>
						</HashLinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
