import axios from "../../http/axios";
import { ContactsListDto } from "../dto/contacts.dto";

export const getListOfContacts = async (
	limit: number | null = 30,
	skip: number | null = 10
): Promise<ContactsListDto | null> => {
	try {
		const { data: contactsList }: { data: ContactsListDto } = await axios({
			method: "get",
			url: "/passenger",
			params: {
				limit,
				skip,
			},
		});
		return contactsList;
	} catch (e: any) {
		console.log("error while getting list of contacts!", e.message);
		throw e;
	}
};
