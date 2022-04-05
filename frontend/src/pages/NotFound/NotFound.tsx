import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound: FC = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				// TODO: button in ant.design shows spin in ts, check why is that and fix it
				<Button
					type="primary"
					onClick={() => navigate("/", { replace: true })}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
