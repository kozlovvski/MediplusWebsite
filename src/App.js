import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//
// components
//

import Navigation from "components/Navigation/Navigation";

//
// pages
//

import Home from "pages/Home/Home";
import Appointment from "pages/Appointment/Appointment";
import Contact from 'components/Contact/Contact'
import Doctor from "pages/Doctor/Doctor";

//
// main
//

export default class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Navigation />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/appointment" component={Appointment} />
						<Route path="/doctor/:id" component={Doctor} />
					</Switch>
				</main>
				<Contact />
			</Router>
		);
	}
}
