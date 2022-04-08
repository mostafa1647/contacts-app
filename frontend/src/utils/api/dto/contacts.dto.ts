export enum GenderEnum {
	Female = "Female",
	Male = "Male",
	NonBinary = "Non-binary",
	Agender = "Agender",
	Bigender = "Bigender",
	Genderqueer = "Genderqueer",
	Genderfluid = "Genderfluid",
	Polygender = "Polygender",
}

export interface ContactDto {
	name: string;
	email: string;
	gender?: GenderEnum | null | undefined;
	phone: string;
	note?: string | null | undefined;
	telegram?: string | null | undefined;
	avatar: string;
	company?: string | null | undefined;
	address?: string | null | undefined;
	createdAt?: string | number | Date | null | undefined;
	updatedAt?: string | number | Date | null | undefined;
	id: number;
}

export interface ContactsListMeta {
	skipped?: number;
	limit?: number;
	total?: number;
	criteria?: any;
}

export interface ContactsListDto {
	meta: ContactsListMeta;
	items: ContactDto[];
}
