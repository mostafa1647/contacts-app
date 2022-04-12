import { FC } from "react";
import styleClasses from "./HomePage.module.scss";
import Container from "../../components/Container";
import SearchContacts from "../../components/SearchContacts";
import RecentContacts from "../../components/RecentContacts";
import SearchResults from "../../components/SearchResults";
import ListAllContacts from "../../components/ListAllContacts";

interface HomePageProps {
	showSearchResults: boolean;
}

const HomePage: FC<HomePageProps> = ({ showSearchResults }): JSX.Element => {
	return (
		<Container>
			<article className={styleClasses.article}>
				<SearchContacts />
				<RecentContacts />
				{showSearchResults ? <SearchResults /> : <ListAllContacts />}
			</article>
		</Container>
	);
};

export default HomePage;
