import React, { Component } from "react";
import "./App.css";
import Input from "./components/TextInput/TextInput";
import CustomButton from "./components/Buttons/CustomButton";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isLoading: false
		};
	}
	onChangeTextInput = (e, key) => {
		this.setState({
			[key]: e.target.value
		});
	};

	onSend = () => {
		console.log(this.state);
	};
	render() {
		return (
			<div className="App">
				<h2>SheCanCode</h2>
				<div className="login-form">
					<Input
						label="Email"
						type="email"
						placeholder="me@example.com"
						value={this.state.email}
						onChange={e => this.onChangeTextInput(e, "email")}
					/>
					<Input
						label="Pasword"
						type="password"
						value={this.state.password}
						onChange={e => this.onChangeTextInput(e, "password")}
					/>
					<CustomButton title="Send" onClick={() => this.onSend()} />
				</div>
			</div>
		);
	}
}
