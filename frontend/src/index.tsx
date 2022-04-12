import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import "./assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

/**
 * it seems ant.design is planning to support react@18 in antd@5,
 * so we downgrade to react@17.0.2
 * @see https://github.com/ant-design/ant-design/issues/26136
 * @see https://github.com/ant-design/ant-design/issues/33862
 */

// const containerElement = document.getElementById("root") as Element;
// const root = createRoot(containerElement);
// root.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>
// );

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
