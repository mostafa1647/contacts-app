import { FC } from "react";
import { Outlet } from "react-router-dom";
import styleClasses from "./Layout.module.scss";
import { Layout as AntdLayout } from "antd";
import Header from "../Header";
import Footer from "../Footer";

const {
	Content: AntdContent,
	Header: AntdHeader,
	Footer: AntdFooter,
} = AntdLayout;

const Layout: FC = () => {
	return (
		<>
			<AntdLayout
				className={[
					styleClasses.layout,
					styleClasses["ant-layout"],
				].join(" ")}>
				<AntdHeader className={styleClasses.header}>
					<Header />
				</AntdHeader>

				<AntdContent>
					<Outlet />
				</AntdContent>

				<AntdFooter className={styleClasses.footer}>
					<Footer />
				</AntdFooter>
			</AntdLayout>
		</>
	);
};

export default Layout;
