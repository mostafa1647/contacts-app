import type { FC } from "react";
import { ReactComponent as ExternalLinkIcon } from "../../assets/icons/icons8-external-link.svg";
import styleClasses from "./Footer.module.scss";

const Footer: FC = (): JSX.Element => (
	<div className={styleClasses.footer}>
		<p className={styleClasses.content}>
			&copy; 2022
			<a
				className={styleClasses.link}
				href="https://github.com/mostafa1647"
				target={"_blank"}
				rel={"noopener noreferrer"}>
				<b>
					{" "}
					Mostafa Mojtahedi!{" "}
					<ExternalLinkIcon
						// prettier-ignore
						className={
							[
								styleClasses.icon,
								styleClasses.link,
							]
								.join(" ")
						}
					/>
				</b>
			</a>
		</p>
	</div>
);

export default Footer;
