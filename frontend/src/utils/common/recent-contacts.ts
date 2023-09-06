import { ContactDto } from "../api/dto/contacts.dto";

export const addRecentContact = (
	{ avatar, id, name }: ContactDto,
	recentContacts: ContactDto[],
	setRecentContacts: Function
): ContactDto[] => {
	let tmp: ContactDto[] = [
		...recentContacts.filter((_contact) => _contact?.id !== id),
		{
			avatar,
			id,
			name,
		} as ContactDto,
	];

	if (tmp.length > 4) tmp.shift();

	setRecentContacts(tmp);

	return tmp;
};
