import type { FC } from "react";
import styleClasses from "./ContactsList.module.scss";
import { Skeleton } from "antd";

interface ContactsListProps {
	loading: boolean;
}

const ContactsList: FC<ContactsListProps> = ({ loading }): JSX.Element => (
	<div className={styleClasses.skeleton}>
		{new Array(10).fill(1).map((_, index) => (
			<Skeleton
				key={index}
				loading={loading}
				active
				avatar={{
					size: 64,
				}}
				paragraph={{
					rows: 1,
				}}
			/>
		))}
	</div>
);

export default ContactsList;
