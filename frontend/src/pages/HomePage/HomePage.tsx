interface HomePageProps {
	showSearchResults: boolean;
}

const HomePage = ({ showSearchResults }: HomePageProps): JSX.Element => {
	return (
		<>
			<p>HomePage {showSearchResults && "search"}</p>
		</>
	);
};

export default HomePage;
