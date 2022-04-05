import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./utils/routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: FC = (): JSX.Element => {
	const element = useRoutes(routes);

	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				{element}
			</QueryClientProvider>
		</div>
	);
};

export default App;
