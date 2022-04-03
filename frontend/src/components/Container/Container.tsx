import type { FC } from "react";
import styleClasses from "./Container.module.scss";

const Container: FC = ({ children = null }): JSX.Element => (
	<>
		<div className={styleClasses.container}>{children}</div>
	</>
);

export default Container;
