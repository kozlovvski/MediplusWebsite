import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";

import Home from "pages/Home/Home";
import Appointment from "pages/Appointment/Appointment";
import Doctor from "pages/Doctors/Doctors";
import Service from "pages/Departments/Departments";

export default function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navigation />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/appointment" component={Appointment} />
					<Route path="/doctors/:id" component={Doctor} />
					<Route path="/departments/:id" component={Service} />
				</Switch>
			</main>
			<Contact />
			<Footer />
		</Router>
	)
}
