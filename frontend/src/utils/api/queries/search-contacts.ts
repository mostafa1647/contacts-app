import axios from "../../http/axios";
import { phoneRegex } from "../../common/regex";
import { ContactsListDto } from "../dto/contacts.dto";

export const searchContactsByPhone = async (
	phone: string,
	skip: number | null = 0,
	limit: number | null = 30
): Promise<ContactsListDto | null | Error> => {
	if (!phone || !phoneRegex.test(phone))
		throw new Error("Please provide valid phone");

	try {
		const { data }: { data: ContactsListDto } = await axios({
			method: "get",
			url: "/passenger",
			params: {
				limit,
				skip,
				sort: "createdAt DESC",
				where: {
					phone: {
						contains: phone,
					},
				},
			},
		});
		return data;
	} catch (e: any) {
		console.log("error while searching the contacts by phone!", e.message);
		throw e;
	}
};

export const searchContactsByName = async (
	name: string,
	skip: number | null = 0,
	limit: number | null = 30
): Promise<ContactsListDto | null | Error> => {
	if (!name) throw new Error("Please provide valid name");

	try {
		const { data }: { data: ContactsListDto } = await axios({
			method: "get",
			url: "/passenger",
			params: {
				limit,
				skip,
				sort: "createdAt DESC",
				where: {
					name: {
						contains: name,
					},
				},
			},
		});
		return data;
	} catch (e: any) {
		console.log("error while searching the contacts by phone!", e.message);
		throw e;
	}
};
