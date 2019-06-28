import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//
// components
//

import Navigation from "./components/Navigation/Navigation";

//
// pages
//

import Home from "./pages/Home/Home";
import Appointment from "./pages/Appointment/Appointment";

// 
// main
// 

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/appointment" component={Appointment} />
		</Switch>
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
