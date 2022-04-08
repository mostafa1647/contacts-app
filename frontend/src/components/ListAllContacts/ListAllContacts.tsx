import type { FC } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { UpdateLimitMeta } from "../SearchResults";
import { useLocalStorage } from "usehooks-ts";
import { ContactDto, ContactsListDto } from "../../utils/api/dto/contacts.dto";
import { recentContactsLocalStorageKey } from "../../utils/common/keys";
import { getListOfContacts } from "../../utils/api/queries/contacts-list";
import Error from "../Error";
import LoadingSkeletons from "../LoadingSkeletons";
import ContactsList from "../ContactsList";
import { addRecentContact } from "../../utils/common/recent-contacts";

const ListAllContacts: FC = (): JSX.Element => {
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

	// server connection
	const {
		data: contacts,
		error,
		isLoading,
	} = useQuery<ContactsListDto | null, Error>(
		["listOfContacts", page],
		async () => await getListOfContacts(limit, (page - 1) * limit),
		{
			keepPreviousData: true,
			staleTime: 10000,
		}
	);

	// effects
	useEffect(() => {
		// check if limit is updated or not
		if (updateLimitMeta.updatingDuoToLimitChange)
			// if limit is updated we still should keep old skip
			queryClient.fetchQuery(
				["listOfContacts", page],
				async () =>
					await getListOfContacts(
						limit,
						(page - 1) * updateLimitMeta.oldLimit
					)
			);
		// if limit is not updated then we should load next page so skip will be updated
		else
			queryClient.fetchQuery(
				["listOfContacts", page],
				async () => await getListOfContacts(limit, (page - 1) * limit)
			);
	}, [
		page,
		limit,
		updateLimitMeta.updatingDuoToLimitChange,
		updateLimitMeta.oldLimit,
		queryClient,
	]);

	if (error)
		return (
			<Error
				title={"Error While Getting Contacts List"}
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

export default ListAllContacts;
