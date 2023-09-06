import type { FC } from "react";
import { useLocalStorage } from "usehooks-ts";
import { recentContactsLocalStorageKey } from "../../utils/common/keys";
import { ContactDto } from "../../utils/api/dto/contacts.dto";
import styleClasses from "./RecentContacts.module.scss";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const RecentContacts: FC = (): JSX.Element | null => {
	const [recentContacts] = useLocalStorage<ContactDto[]>(
		recentContactsLocalStorageKey,
		[]
	);

	if (!recentContacts || !recentContacts.length) return null;

	return (
		<div className={styleClasses.listWrapper}>
			<ul className={styleClasses.list}>
				{[...recentContacts].reverse().map((_contact, index) => (
					<li key={index} className={styleClasses.listItem}>
						<Link to={`/contacts/${_contact?.id}`}>
							<div className={styleClasses.avatarWrapper}>
								<Avatar
									className={styleClasses.avatar}
									src={_contact?.avatar}
								/>
							</div>
							<div className={styleClasses.infoWrapper}>
								<p className={styleClasses.name}>
									{_contact?.name?.split(" ")[0]}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentContacts;
