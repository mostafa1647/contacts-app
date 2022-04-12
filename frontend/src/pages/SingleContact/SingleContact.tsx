import type { FC } from "react";
import styleClasses from "./SingleContact.module.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleContact } from "../../utils/api/queries/single-contact";
import { ContactDto } from "../../utils/api/dto/contacts.dto";
import ErrorComponent from "../../components/Error";
import Container from "../../components/Container";
import { Avatar } from "antd";
import LoadingSkeletons from "../../components/LoadingSkeletons";
import {
	BankOutlined,
	FileOutlined,
	HomeOutlined,
	MailOutlined,
	ManOutlined,
	PhoneOutlined,
	WomanOutlined,
} from "@ant-design/icons";
import { ReactComponent as TelegramIcon } from "../../assets/icons/icons8-telegram-app.svg";

const SingleContact: FC = (): JSX.Element => {
	const { contactId } = useParams() as { contactId: string };

	// server connection
	const {
		data: contact,
		isLoading,
		error,
	} = useQuery<ContactDto | null, Error>(
		["singleContact", contactId],
		async () => await getSingleContact(contactId)
	);

	if (error)
		return (
			<Container>
				<article className={styleClasses.article}>
					<ErrorComponent
						title={"ErrorComponent While Getting Contact Info"}
						message={(error as Error).message}
					/>
				</article>
			</Container>
		);

	if (isLoading)
		return (
			<Container>
				<article className={styleClasses.article}>
					<LoadingSkeletons.SingleContact loading={isLoading} />
				</article>
			</Container>
		);

	// TODO: add back button
	return (
		<Container>
			<article className={styleClasses.article}>
				<div className={styleClasses.profile}>
					<div className={styleClasses.banner}>
						<div className={styleClasses.avatarWrapper}>
							<Avatar
								className={styleClasses.avatar}
								size={150}
								src={contact?.avatar}
								shape={"circle"}
							/>
						</div>
					</div>
					<div className={styleClasses.userInfo}>
						<h2 className={styleClasses.userFullName}>
							{contact?.name}
						</h2>
						<ul>
							{contact?.phone ? (
								<li className={styleClasses.userProfileInfo}>
									<span className={styleClasses.icon}>
										<PhoneOutlined />
									</span>
									<a
										href={`tel:${contact?.phone}`}
										rel={"noopener noreferrer"}
										target={"_blank"}>
										{contact?.phone}
									</a>
								</li>
							) : null}
							{contact?.email ? (
								<li className={styleClasses.userProfileInfo}>
									<span className={styleClasses.icon}>
										<MailOutlined />
									</span>
									<a
										href={`mailto:${contact?.email}`}
										rel={"noopener noreferrer"}
										target={"_blank"}>
										{contact?.email}
									</a>
								</li>
							) : null}
							{contact?.gender ? (
								<li className={styleClasses.userProfileInfo}>
									<span className={styleClasses.icon}>
										{contact?.gender === "Male" && (
											<ManOutlined />
										)}
										{contact?.gender === "Female" && (
											<WomanOutlined />
										)}
										{contact?.gender !== "Male" &&
											contact?.gender !== "Female" && (
												<WomanOutlined />
											)}
									</span>
									<span className={styleClasses.content}>
										{contact?.gender}
									</span>
								</li>
							) : null}
							{contact?.telegram ? (
								<li className={styleClasses.userProfileInfo}>
									<span
										className={[
											styleClasses.icon,
											styleClasses.telegram,
										].join(" ")}>
										<TelegramIcon />
									</span>
									<a
										href={`https://t.me/${contact?.telegram}`}
										rel={"noopener noreferrer"}
										target={"_blank"}>
										{contact?.telegram}
									</a>
								</li>
							) : null}
							{contact?.company ? (
								<li className={styleClasses.userProfileInfo}>
									<span className={styleClasses.icon}>
										<BankOutlined />
									</span>
									<span className={styleClasses.content}>
										{contact?.company}
									</span>
								</li>
							) : null}
							{contact?.address ? (
								<li className={styleClasses.userProfileInfo}>
									<span className={styleClasses.icon}>
										<HomeOutlined />
									</span>
									<address className={styleClasses.content}>
										{contact?.address}
									</address>
								</li>
							) : null}
						</ul>
						{contact?.note ? (
							<div
								className={[
									styleClasses.userProfileInfo,
									styleClasses.note,
								].join(" ")}>
								<span className={styleClasses.icon}>
									<FileOutlined />
								</span>
								<p className={styleClasses.content}>
									{contact?.note}
								</p>
							</div>
						) : null}
					</div>
				</div>
			</article>
		</Container>
	);
};

export default SingleContact;
