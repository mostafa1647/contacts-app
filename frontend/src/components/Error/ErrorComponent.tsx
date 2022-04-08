import type { FC } from "react";
import { Result, Space } from "antd";

interface ErrorProps {
	title: string;
	message: string;
}

const ErrorComponent: FC<ErrorProps> = ({ title, message }): JSX.Element => (
	<Space
		direction={"vertical"}
		size={"large"}
		style={{
			width: "100%",
		}}>
		<Result status="error" title={title} subTitle={message}></Result>
	</Space>
);

export default ErrorComponent;
