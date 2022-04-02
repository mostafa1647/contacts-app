import type { FC } from "react";
import Container from "../Container";
import styleClasses from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/images/logo-on-dark-bg.svg";

const Header: FC = (): JSX.Element => (
	<Container>
		<div className={styleClasses.header}>
			<div className={styleClasses.logo}>
				<Link className={styleClasses.logoLink} to={"/"}>
					<LogoSvg width={180} />
				</Link>
			</div>
		</div>
	</Container>
);

export default Header;
