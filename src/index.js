import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, combineReducers } from "redux";
import allReducer from "./reducers";

const store = createStore(allReducer);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
