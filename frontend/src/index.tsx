import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "antd/dist/antd.less";
import "./assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const containerElement = document.getElementById("root") as Element;
const root = createRoot(containerElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
