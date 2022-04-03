import axios from "../../http/axios";
import { ContactDto } from "../dto/contacts.dto";

export const getSingleContact = async (
	contactId: string
): Promise<ContactDto | null | Error> => {
	try {
		const { data }: { data: ContactDto } = await axios({
			method: "get",
			url: `/passenger/${contactId}`,
		});
		return data;
	} catch (e: any) {
		console.log(
			`error while getting contact with id: ${contactId}`,
			e.message
		);
		throw e;
	}
};
