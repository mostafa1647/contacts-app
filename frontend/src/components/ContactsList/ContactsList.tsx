import type { FC } from "react";
import styleClasses from "./ContactsList.module.scss";
import type {
	ContactDto,
	ContactsListMeta,
} from "../../utils/api/dto/contacts.dto";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";
import type { UpdateLimitMeta } from "../SearchResults";

interface ContactsListProps {
	contacts: ContactDto[] | undefined;
	contactsMeta: ContactsListMeta | undefined;
	limit: number;
	setLimit: (limit: number) => void;
	setUpdateLimitMeta: (updateLimitMeta: UpdateLimitMeta) => void;
	setPage: (page: number) => void;
	contactNameOnClick: (contact: ContactDto) => void;
}

const ContactsList: FC<ContactsListProps> = ({
	contacts = [],
	contactsMeta = {},
	limit = 10,
	setLimit = () => {},
	setUpdateLimitMeta = () => {},
	setPage = () => {},
	contactNameOnClick = () => {},
}): JSX.Element => (
	<>
		<div className={styleClasses.contactsListWrapper}>
			<div className={styleClasses.contactsList}>
				<List
					className={styleClasses.list}
					bordered={true}
					itemLayout="horizontal"
					size="large"
					pagination={{
						onChange: (_page) => setPage(_page),
						onShowSizeChange: (_, size) => {
							setUpdateLimitMeta({
								updatingDuoToLimitChange: true,
								oldLimit: limit,
							});
							setLimit(size);
						},
						total: contactsMeta?.total,
						size: "small",
					}}
					dataSource={contacts}
					renderItem={(_contact) => (
						<List.Item className={styleClasses.listItemWithDivider}>
							<List.Item.Meta
								avatar={
									<Avatar
										className={styleClasses.avatar}
										size={64}
										src={_contact?.avatar}
									/>
								}
								title={
									<Link
										to={`/contacts/${_contact?.id}`}
										onClick={() =>
											contactNameOnClick(_contact)
										}>
										{_contact?.name}
									</Link>
								}
								description={
									<>
										<p className={styleClasses.phone}>
											<span>Phone: </span>
											<span>{_contact?.phone}</span>
										</p>
										{_contact?.address ? (
											<address
												className={
													styleClasses.address
												}>
												<span>Address: </span>
												<span>{_contact?.address}</span>
											</address>
										) : null}
									</>
								}
							/>
						</List.Item>
					)}
				/>
			</div>
		</div>
	</>
);

export default ContactsList;
