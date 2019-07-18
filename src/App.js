import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "components/Navigation";
import Contact from "components/Contact";
import Footer from "components/Footer";

import Home from "pages/Home";
import Appointment from "pages/Appointment";
import Doctor from "pages/Doctors";
import Department from "pages/Departments";

export default function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navigation />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/appointment" component={Appointment} />
					<Route path="/doctors/:id" component={Doctor} />
					<Route path="/departments/:id" component={Department} />
				</Switch>
			</main>
			<Contact />
			<Footer />
		</Router>
	)
}
