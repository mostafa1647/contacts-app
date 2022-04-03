import type { FC } from "react";
import Container from "../Container";
import styleClasses from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";

const Header: FC = (): JSX.Element => (
	<Container>
		<div className={styleClasses.header}>
			<div className={styleClasses.logo}>
				<Link className={styleClasses.logoLink} to={"/"}>
					<ReactLogo className={styleClasses.logoImage} />
					<span className={styleClasses.logoText}>React</span>
				</Link>
			</div>
		</div>
	</Container>
);

export default Header;
