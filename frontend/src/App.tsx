import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./utils/routes/routes";

const App: FC = (): JSX.Element => {
	const element = useRoutes(routes);
	return <div className="App">{element}</div>;
};

export default App;
