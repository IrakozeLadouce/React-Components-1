import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Login}/>
						<Route exact path="/signup" component={Signup}/>
					</div>
				</Router>
			</div>
		);
	}
}
