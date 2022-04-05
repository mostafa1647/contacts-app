import { FC, ReactNode } from "react";

interface HomePageProps {
	showSearchResults: boolean;
}

const HomePage: FC<HomePageProps> = ({ showSearchResults }): JSX.Element => {
	return (
		<>
			<p>HomePage {showSearchResults && "search"}</p>
		</>
	);
};

export default HomePage;
