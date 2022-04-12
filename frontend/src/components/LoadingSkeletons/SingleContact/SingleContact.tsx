import type { FC } from "react";
import { Skeleton } from "antd";

interface SingleContactProps {
	loading: boolean;
}

const SingleContact: FC<SingleContactProps> = ({ loading }): JSX.Element => (
	<Skeleton
		loading={loading}
		active
		avatar={{
			size: 64,
		}}
		paragraph={{
			rows: 4,
		}}
	/>
);

export default SingleContact;
