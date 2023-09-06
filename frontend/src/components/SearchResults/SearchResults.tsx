import type { FC } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ContactDto, ContactsListDto } from "../../utils/api/dto/contacts.dto";
import { recentContactsLocalStorageKey } from "../../utils/common/keys";
import { useSearchParams } from "react-router-dom";
import {
	searchContactsByName,
	searchContactsByPhone,
} from "../../utils/api/queries/search-contacts";
import ErrorComponent from "../Error";
import LoadingSkeletons from "../LoadingSkeletons";
import ContactsList from "../ContactsList";
import { addRecentContact } from "../../utils/common/recent-contacts";

export interface UpdateLimitMeta {
	updatingDuoToLimitChange: boolean;
	oldLimit: number;
}

const SearchResults: FC = (): JSX.Element => {
	// get query client from react query
	const queryClient = useQueryClient();

	// define states
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const [updateLimitMeta, setUpdateLimitMeta] = useState<UpdateLimitMeta>({
		updatingDuoToLimitChange: false,
		oldLimit: limit,
	});

	// get recent contacts from localStorage
	const [recentContacts, setRecentContacts] = useLocalStorage<ContactDto[]>(
		recentContactsLocalStorageKey,
		[]
	);

	// get search params from url
	const [searchParams] = useSearchParams();
	const [phone, name] = [searchParams.get("phone"), searchParams.get("name")];

	const searchContactsHandler = useCallback(
		async (
			limit: number,
			skip: number
		): Promise<ContactsListDto | null> => {
			if (phone)
				/**
				 * replacing @ with + in phone
				 * @see SearchContacts
				 */
				return await searchContactsByPhone(
					phone.replace(/@/g, "+"),
					skip,
					limit
				);
			else if (name) return await searchContactsByName(name, skip, limit);
			else throw new Error("Search parameters are invalid!");
		},
		[name, phone]
	);

	// server connection
	const {
		data: contacts,
		error,
		isLoading,
		refetch: reFetchSearchQuery,
	} = useQuery<ContactsListDto | null, Error>(
		["searchListOfContacts", page],
		async () => await searchContactsHandler(limit, (page - 1) * limit),
		{ keepPreviousData: true, staleTime: 10000 }
	);

	// effects
	// update limit and skip meta
	useEffect(() => {
		// check if limit is updated or not
		if (updateLimitMeta.updatingDuoToLimitChange)
			// if limit is updated we still should keep old skip
			queryClient.fetchQuery(
				["searchListOfContacts", page],
				async () =>
					await searchContactsHandler(
						limit,
						(page - 1) * updateLimitMeta.oldLimit
					)
			);
		// if limit is not updated then we should load next page so skip will be updated
		else
			queryClient.fetchQuery(
				["searchListOfContacts", page],
				async () =>
					await searchContactsHandler(limit, (page - 1) * limit)
			);
	}, [
		limit,
		page,
		queryClient,
		searchContactsHandler,
		updateLimitMeta.oldLimit,
		updateLimitMeta.updatingDuoToLimitChange,
	]);

	// we should refetch search query on phone or name update
	useEffect(() => {
		reFetchSearchQuery();
	}, [name, phone, reFetchSearchQuery]);

	if (error)
		return (
			<ErrorComponent
				title={"ErrorComponent While Getting Contacts List"}
				message={error.message}
			/>
		);

	if (isLoading) return <LoadingSkeletons.ContactsList loading={isLoading} />;

	return (
		<>
			<ContactsList
				contacts={contacts?.items}
				contactsMeta={contacts?.meta}
				limit={limit}
				setLimit={setLimit}
				setUpdateLimitMeta={setUpdateLimitMeta}
				setPage={setPage}
				contactNameOnClick={(_contact) =>
					addRecentContact(
						_contact as ContactDto,
						recentContacts as ContactDto[],
						setRecentContacts as Function
					)
				}
			/>
		</>
	);
};

export default SearchResults;
