import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	return (
		<div className="App">
			<h1>Counter {counter}</h1>

			{isLogged ? <h3>information</h3> : ""}
		</div>
	);
}

export default App;
