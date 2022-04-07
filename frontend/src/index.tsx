import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "antd/dist/antd.less";
import "./assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const containerElement = document.getElementById("root") as Element;
const root = createRoot(containerElement);

/**
 * can not use React strict mode cause of antd
 * antd version "^4.19.5"
 * React version "^18.0.0"
 */
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
