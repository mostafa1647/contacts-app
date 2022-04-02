import { RouteObject } from "react-router-dom";
import Layout from "../../components/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import SingleContact from "../../pages/SingleContact/SingleContact";
import NotFound from "../../pages/NotFound/NotFound";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage showSearchResults={false} /> },
			{
				path: "/search",
				element: <HomePage showSearchResults={true} />,
			},
			{
				path: "/contacts/:contactId",
				element: <SingleContact />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
];
